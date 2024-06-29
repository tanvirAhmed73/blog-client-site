import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <p className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg transition duration-300 ease-in-out hover:bg-blue-700">
            Go to Homepage
          </p>
        </Link>
      </div>
    </div>
  );
}
