import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-1 bg-gradient-to-b from-gray-50 to-white">
      <main>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              100% Privacy-First Technology
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Redact Sensitive Information
              <span className="block text-blue-600 mt-2">Without Leaving Your Browser</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Automatically find and redact SSNs, phone numbers, emails, credit cards, and more.
              Your documents never leave your device. Zero cloud processing. HIPAA-friendly by design.
            </p>
            <div className="mt-12 flex justify-center gap-4 flex-wrap">
              <Link
                to="/upload"
                className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Start Redacting Now
              </Link>
              <a
                href="#features"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
              >
                Learn How It Works
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No account required • No installation needed • Free forever
            </p>
          </div>
        </div>

        <div id="features" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why RedactGuide?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The only document redaction tool that puts your privacy first
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex rounded-lg bg-blue-50 p-3 mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Local Processing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your documents never leave your device. All processing happens entirely in your browser using WebAssembly and JavaScript.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex rounded-lg bg-green-50 p-3 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Detection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Smart pattern matching finds SSNs, phone numbers, emails, credit cards, dates of birth, and more with high accuracy.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex rounded-lg bg-red-50 p-3 mb-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliant</h3>
                <p className="text-gray-600 leading-relaxed">
                  No data transmission means built-in compliance with HIPAA, GDPR, and other privacy regulations.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex rounded-lg bg-yellow-50 p-3 mb-4">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Process documents in seconds with optimized algorithms. No waiting for uploads or server processing.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex rounded-lg bg-slate-50 p-3 mb-4">
                  <svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Works Offline</h3>
                <p className="text-gray-600 leading-relaxed">
                  Progressive Web App technology means you can install and use RedactGuide completely offline.
                </p>
              </div>

              <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex rounded-lg bg-cyan-50 p-3 mb-4">
                  <svg className="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Forever</h3>
                <p className="text-gray-600 leading-relaxed">
                  No subscriptions, no credits, no hidden costs. RedactGuide is completely free and open source.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Three simple steps to redact your documents
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Upload Your PDF</h3>
                <p className="mt-3 text-gray-600">
                  Drag and drop or select a PDF file. It stays on your device - nothing is uploaded.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Review Detections</h3>
                <p className="mt-3 text-gray-600">
                  See what sensitive information was found. Add or remove items as needed.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Download Redacted PDF</h3>
                <p className="mt-3 text-gray-600">
                  Get your redacted document with all sensitive information permanently removed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your Privacy is Our Priority
              </h2>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
                Unlike other redaction tools that require uploading your documents to the cloud,
                RedactGuide processes everything locally in your browser. Your sensitive documents
                never touch our servers because we don't have any servers.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link
                  to="/upload"
                  className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-all"
                >
                  Try It Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
