// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>Root Navigation</nav>
        {children}
      </body>
    </html>
  );
}
