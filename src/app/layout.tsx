// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Driven Consulting",
  description:
    "Beratung für Datenstrategie, Reporting und Power BI im Finance- und IT-Umfeld",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Data Driven Consulting</h1>
            <nav className="space-x-4 text-sm">
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Start
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">
                Über mich
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">
                Kontakt
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-sm text-center py-6 mt-16 text-gray-500">
          © {new Date().getFullYear()} Data Driven Consulting
        </footer>
      </body>
    </html>
  );
}
