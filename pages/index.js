// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 py-6">GetCertified</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Empowering Skilled Individuals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            GetCertified is a non-profit organization dedicated to recognizing and rewarding talent.
            We provide free certifications to skilled individuals, helping you showcase your abilities
            and advance your career.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to democratize access to quality credentials and support lifelong learning,
            ensuring that every talented individual has the opportunity to succeed.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800">Free Certification</h3>
              <p className="mt-2 text-gray-600">
                Access our certification programs at no cost and enhance your professional profile.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800">Empowering Careers</h3>
              <p className="mt-2 text-gray-600">
                Our certificates help you stand out in the job market and open new career opportunities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800">Lifelong Learning</h3>
              <p className="mt-2 text-gray-600">
                We promote continuous learning and skill development through our free courses and certification programs.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} GetCertified. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
