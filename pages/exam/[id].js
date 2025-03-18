import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AntiCheating from "../../components/AntiCheating";
import { useSession } from "next-auth/react";

// Import NextAuth server-side helper and your auth options
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/authOptions";
import connectToDatabase from "../../lib/db";
import Exam from "../../models/exam";

export default function ExamPage({ exam }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Record the user's selected answers.
  const [userAnswers, setUserAnswers] = useState({});
  // Track whether the exam is submitted.
  const [submitted, setSubmitted] = useState(false);
  // For cheating detection.
  const [cheatingCount, setCheatingCount] = useState(0);
  // Total time taken (in seconds) across all questions.
  const [timeTaken, setTimeTaken] = useState(0);

  // For per-question handling:
  const QUESTION_TIME = 20; // seconds per question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(QUESTION_TIME);

  // Timer effect for each question.
  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setQuestionTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          proceedToNextQuestion(); // Auto move on when time's up.
          return QUESTION_TIME;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, currentQuestionIndex]);

  // Proceed to next question.
  const proceedToNextQuestion = () => {
    setTimeTaken((prev) => prev + (QUESTION_TIME - questionTimeLeft));

    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuestionTimeLeft(QUESTION_TIME);
    } else {
      handleSubmit();
    }
  };

  // Called when the user selects an option.
  const handleOptionChange = (selectedOption) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: selectedOption,
    }));
    proceedToNextQuestion();
  };

  // When the exam is finished.
  const handleSubmit = async () => {
    if (submitted) return;
    setSubmitted(true);

    const correctCount = exam.questions.reduce((count, question, idx) => {
      return userAnswers[idx] === question.correctAnswer ? count + 1 : count;
    }, 0);
    const total = exam.questions.length;
    const passingScore = 40;
    const passed = correctCount >= passingScore;

    const resultData = {
      userId: session?.user?.id,
      examId: exam._id,
      userName: session?.user?.name,
      examName: exam.title,
      score: correctCount,
      total,
      passed,
      timeTaken,
      cheatingCount,
      createdAt: new Date(),
    };

    await onExamSubmit(resultData);
  };

  const handleCheatingDetected = () => {
    setCheatingCount((prev) => prev + 1);
  };

  if (!exam.questions || exam.questions.length === 0) {
    return <p>No questions found.</p>;
  }

  const currentQuestion = exam.questions[currentQuestionIndex];

  return (
    <div className="relative">
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <>
          <AntiCheating onCheatingDetected={handleCheatingDetected} />
          <div className="p-6 max-w-3xl mx-auto">
            <Head>
              <title>{exam.title}</title>
            </Head>
            <h1 className="text-3xl font-bold mb-6">{exam.title}</h1>
            <h2 className="text-xl mb-4">
              Question {currentQuestionIndex + 1} of {exam.questions.length}
            </h2>
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
              <p className="text-lg font-medium mb-3">
                {currentQuestion.questionText}
              </p>
              <div>
                {currentQuestion.options.map((option, i) => (
                  <label
                    key={i}
                    className="block p-2 mb-2 border rounded cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      onChange={() => handleOptionChange(option)}
                      checked={userAnswers[currentQuestionIndex] === option}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">
                  Time left for this question: {questionTimeLeft} seconds
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

async function onExamSubmit(resultData) {
  try {
    const resultRes = await fetch("/api/exams/result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resultData),
      cache: "no-store",
    });
    const resultJson = await resultRes.json();
    if (!resultRes.ok) {
      console.error(resultJson.message);
      return;
    }

    if (resultData.passed) {
      const certRes = await fetch("/api/certificate/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: resultData.userId,
          examId: resultData.examId,
          userName: resultData.userName,
          examName: resultData.examName,
          passed: resultData.passed,
        }),
        cache: "no-store",
      });
      const certJson = await certRes.json();
      if (certRes.ok) {
        alert(
          "Certificate generated! Certificate Number: " +
            certJson.certificateNumber
        );
      } else {
        console.error(certJson.message);
      }
    }
  } catch (error) {
    console.error("Submission error:", error);
  }
}

export async function getServerSideProps(context) {
  const session = await getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return { redirect: { destination: "/sign-in", permanent: false } };
  }

  try {
    await connectToDatabase();
    const exam = await Exam.findById(context.params.id);
    if (!exam || !exam.questions) {
      return { notFound: true };
    }
    const examObj = JSON.parse(JSON.stringify(exam));
    return { props: { exam: examObj } };
  } catch (error) {
    console.error("Error fetching exam:", error);
    return { notFound: true };
  }
}
