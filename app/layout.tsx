import './globals.css';
import './preflight.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
