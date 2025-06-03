"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function HomePage() {
  const [dataTable, setDataTable] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxGGPAp9NDCHtOVdPHfAnnxBbjB9TSGpJeyB1QPsNlbmpD3FYxuG3cx3auIr9bOFFnl/exec"
        );
        const data = await response.json();
        setDataTable(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    if (dataTable.length > 0) {
      const header = dataTable[0];
      const data = dataTable.slice(1);

      const filtered = data.filter((row) => {
        return row.some((cell) =>
          String(cell).toLowerCase().includes(filterText.toLowerCase())
        );
      });
      return [header, ...filtered];
    } else {
      return [];
    }
  }, [dataTable, filterText]);

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          placeholder="Filter..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <div id="table-container">
        {filteredData.length > 0 && (
          <table id="myTable">
            <thead>
              <tr>
                {filteredData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.slice(1).map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {rowData.map((cellData, cellIndex) => (
                    <td key={cellIndex}>
                      <div className="cell">{cellData}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
