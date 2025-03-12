"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ExamQuestion({ params }) {
  const { sessionId } = params;
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (sessionId) fetchQuestion();
  }, [sessionId]);

  const fetchQuestion = async () => {
    try {
      const res = await axios.get(`/api/exam/question/${sessionId}`);
      if (res.data.msg === "Exam completed") {
        alert("Exam completed!");
        router.push("/exam/completed");
      } else {
        setQuestion(res.data);
      }
    } catch (err) {
      alert("Failed to load question");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {question ? (
        <>
          <h2 className="text-xl font-semibold">{question.text}</h2>
          <ul className="mt-4">
            {question.options.map((option, index) => (
              <li key={index} className="p-2 border rounded mb-2">
                {option}
              </li>
            ))}
          </ul>
          <button onClick={fetchQuestion} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Next Question
          </button>
        </>
      ) : (
        <p>No more questions</p>
      )}
    </div>
  );
}
