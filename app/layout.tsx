import { AnalyticsWrapper } from './analytics';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head></head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
