// app/loading.js
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="text-lg font-semibold text-gray-700">Đang tải dữ liệu...</p>
      {/* You could also add a spinner or more elaborate loading animation here */}
      <div className="mt-4 animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </main>
  );
}
