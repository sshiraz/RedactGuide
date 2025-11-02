import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link to="/" className="text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            RedactGuide
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Privacy-First Document Redaction
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Automatically find and redact sensitive information entirely in your browser.
            No uploads. No cloud processing. HIPAA-friendly by design.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/upload"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div id="features" className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">100% Local Processing</h3>
              <p className="mt-2 text-gray-600">
                Your documents never leave your device. All processing happens in your browser.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Automatic Detection</h3>
              <p className="mt-2 text-gray-600">
                Finds SSNs, phone numbers, emails, credit cards, and more using smart pattern matching.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">HIPAA Compliant</h3>
              <p className="mt-2 text-gray-600">
                No data transmission means built-in compliance with privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
