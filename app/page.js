
"use client";
import React, { useState, useEffect } from "react";

export default function HomePage() { // Bỏ async ở đây
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm state cho trạng thái loading (tùy chọn)
  const [error, setError] = useState(null); // Thêm state cho lỗi (tùy chọn)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // Bắt đầu loading
        const response = await fetch('https://script.google.com/macros/s/AKfycbxGGPAp9NDCHtOVdPHfAnnxBbjB9TSGpJeyB1QPsNlbmpD3FYxuG3cx3auIr9bOFFnl/exec');
        const data = await response.json();
        setDataTable(data);
      } catch (err) {
        console.error(err); // Log lỗi ra console
        setError(err.message); // Cập nhật state lỗi
        setDataTable([]); // Có thể reset data hoặc giữ data cũ tùy logic
      } finally {
        setLoading(false); // Kết thúc loading dù thành công hay thất bại
      }
    }

    fetchData();
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần sau khi component được mount

  if (loading) {
    return <main><p>Loading data...</p></main>; // Hiển thị khi đang tải
  }

  if (error) {
    return <main><p>Error: {error}</p></main>; // Hiển thị khi có lỗi
  }

  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>Data from server: {JSON.stringify(dataTable) || "No data"} </p> {/* Sửa "ok" thành "No data" hoặc thông báo phù hợp hơn */}
    </main>
  );
}
