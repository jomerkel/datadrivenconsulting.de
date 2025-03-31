export default function ContactPage() {
  return (
    <main className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
        <p className="mb-8">
          Ich freue mich über Ihre Nachricht – schreiben Sie mir direkt per E-Mail oder nutzen Sie
          das folgende Formular.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ihr Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ihre E-Mail-Adresse"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Nachricht
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ihre Nachricht"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Abschicken
          </button>
        </form>
      </div>
    </main>
  );
}
