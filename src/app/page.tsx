import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Driven Consulting</title>
        <meta
          name="description"
          content="Beratung für Datenstrategie, Reporting und Power BI"
        />
      </Head>

      <main className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Datenstrategie, die wirkt.
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ich helfe Unternehmen, ihr Reporting aus dem Excel-Labyrinth zu befreien
            und moderne Datenlösungen mit Power BI & Co. strategisch aufzubauen – von CFO bis IT.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Jetzt Gespräch vereinbaren
          </a>
        </div>
      </main>
    </>
  );
}
