import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxCat AI — AI Expense Categorizer for Freelancers",
  description: "Upload receipts and transactions. AI categorizes your expenses into proper tax deduction categories with confidence scores."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="89ed72d1-2c22-4983-923e-26e5eb185c29"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
