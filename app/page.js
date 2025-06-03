// app/page.js
// Đây là một Server Component theo mặc định
async function getData() {
  const res = await fetch('https://script.google.com/macros/s/AKfycbxGGPAp9NDCHtOVdPHfAnnxBbjB9TSGpJeyB1QPsNlbmpD3FYxuG3cx3auIr9bOFFnl/exec');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function HomePage() {
  const data = await getData(); // Fetch dữ liệu trên server
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>Data from server:{JSON.stringify(data)||"ok"} </p>
    </main>
  );
}
