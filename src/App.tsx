function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">RedactGuide</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Local-Only Document Redaction
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Automatically find and redact sensitive information entirely in your browser.
            No uploads. HIPAA-friendly by design.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
