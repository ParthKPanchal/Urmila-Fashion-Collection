import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#fdf5ee] flex items-center justify-center px-5">
      <div className="max-w-xl text-center bg-white rounded-2xl shadow-lg p-10 border border-gray-200">
        <h1 className="text-8xl font-extrabold text-green-700">404</h1>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 leading-7">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-5 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition duration-300"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
