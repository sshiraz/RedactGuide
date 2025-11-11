import { useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import UploadZone from '../features/import/UploadZone';
import FilePreview from '../features/import/FilePreview';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface FileData {
  file: File;
  arrayBuffer: ArrayBuffer;
  pageCount: number;
}

export default function Upload() {
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');

  const handleFileSelect = useCallback(async (file: File) => {
    setIsProcessing(true);
    setError('');

    try {
      const arrayBuffer = await file.arrayBuffer();

      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;

      setFileData({
        file,
        arrayBuffer,
        pageCount: pdf.numPages,
      });
    } catch (err) {
      console.error('Error loading PDF:', err);
      setError('Failed to load PDF. The file may be corrupted or password-protected.');
      setFileData(null);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleClear = useCallback(() => {
    setFileData(null);
    setError('');
  }, []);

  const handleChooseAnother = useCallback(() => {
    setFileData(null);
    setError('');
  }, []);

  return (
    <div className="flex-1 bg-neutral-50">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Upload Document</h2>
          <p className="mt-4 text-neutral-600">
            Upload a PDF to start redacting sensitive information
          </p>

          <div className="mt-8 flex justify-center">
            {isProcessing ? (
              <div className="w-full max-w-2xl rounded-lg border border-neutral-200 bg-white p-12 text-center">
                <div className="flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent"></div>
                  <span className="ml-3 text-neutral-600">Processing PDF...</span>
                </div>
              </div>
            ) : fileData ? (
              <FilePreview
                fileName={fileData.file.name}
                fileSize={fileData.file.size}
                pageCount={fileData.pageCount}
                onClear={handleClear}
                onChooseAnother={handleChooseAnother}
              />
            ) : (
              <UploadZone onFileSelect={handleFileSelect} />
            )}
          </div>

          {error && (
            <div className="mt-4 rounded-lg bg-error-50 p-4 text-error-700">
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
