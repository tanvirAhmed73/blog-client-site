// app/loading.js

export default function Loading() {
  return (
    <div className="p-4 bg-gray-100 h-screen rounded-lg w-full max-w-2xl mx-auto shadow-lg">
      <div className="w-full h-6 bg-gray-300 rounded mb-4 relative overflow-hidden skeleton-item"></div>
      <div className="flex flex-col gap-4">
        <div className="w-full h-6 bg-gray-300 rounded relative overflow-hidden skeleton-item"></div>
        <div className="w-full h-6 bg-gray-300 rounded relative overflow-hidden skeleton-item"></div>
        <div className="w-full h-6 bg-gray-300 rounded relative overflow-hidden skeleton-item"></div>
      </div>
    </div>
  );
}
