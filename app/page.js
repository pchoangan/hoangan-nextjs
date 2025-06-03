
"use client";
import React, { useState, useEffect } from "react";

export default function HomePage() { 
  const [dataTable, setDataTable] = useState([]);  

  useEffect(() => {
    async function fetchData() {
      try {        
        const response = await fetch('https://script.google.com/macros/s/AKfycbxGGPAp9NDCHtOVdPHfAnnxBbjB9TSGpJeyB1QPsNlbmpD3FYxuG3cx3auIr9bOFFnl/exec');
        const data = await response.json();
        setDataTable(data);
      } catch (err) {
        console.error(err); // Log lỗi ra console
      } 
    }
    fetchData();
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần sau khi component được mount
  
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>Data from server: {JSON.stringify(dataTable, null, 2) || "No data"} </p> 
    </main>
  );
}
