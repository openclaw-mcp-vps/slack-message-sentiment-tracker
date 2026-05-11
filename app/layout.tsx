import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Sentiment Tracker – Track Team Morale in Real Time",
  description: "Analyze Slack messages to gauge team morale, identify negative sentiment trends, and catch burnout signals before they escalate."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5d698f4d-0cac-4c34-a5f8-29626c1ff6a0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
