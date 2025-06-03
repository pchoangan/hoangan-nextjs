
"use client";
import React, { useState, useEffect, useMemo } from "react";

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
      <div id="table-container">
          <table id="myTable">
            <thead>
              <tr>
                {dataTable[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataTable.slice(1).map((rowData, rowIndex) => (
                <tr
                  key={rowIndex}
                >
                  {rowData.map((cellData, cellIndex) => (
                    <td key={cellIndex}>
                      <div className="cell">{cellData}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </main>
  );
}
