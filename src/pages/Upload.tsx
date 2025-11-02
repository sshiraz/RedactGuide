export default function Upload() {
  return (
    <div className="flex-1 bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Upload Document</h2>
          <p className="mt-4 text-gray-600">
            Upload a PDF to start redacting sensitive information
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center hover:border-gray-400 transition-colors">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="mt-4 text-sm text-gray-600">
                Drag and drop your PDF here, or click to browse
              </p>
              <p className="mt-2 text-xs text-gray-500">PDF files up to 50MB</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
