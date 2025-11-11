import { useState, useCallback } from 'react';
import { DocumentArrowUpIcon } from '@heroicons/react/24/outline';

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export default function UploadZone({ onFileSelect }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string>('');

  const validateFile = (file: File): string | null => {
    if (file.type !== 'application/pdf') {
      return 'Please upload a PDF file';
    }

    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      return 'File size must be less than 50MB';
    }

    if (file.size === 0) {
      return 'File is empty';
    }

    return null;
  };

  const handleFile = useCallback(
    (file: File) => {
      setError('');
      const validationError = validateFile(file);

      if (validationError) {
        setError(validationError);
        return;
      }

      onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFile(files[0]);
      }
    },
    [handleFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleFile(files[0]);
      }
    },
    [handleFile]
  );

  return (
    <div className="w-full max-w-2xl">
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          relative rounded-lg border-2 border-dashed p-12 text-center transition-all
          ${
            isDragging
              ? 'border-primary-500 bg-primary-50'
              : 'border-neutral-300 bg-white hover:border-neutral-400'
          }
          ${error ? 'border-error-500 bg-error-50' : ''}
        `}
      >
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileInput}
          className="absolute inset-0 cursor-pointer opacity-0"
          aria-label="Upload PDF file"
        />

        <div className="pointer-events-none">
          <DocumentArrowUpIcon
            className={`mx-auto h-16 w-16 ${
              error ? 'text-error-400' : isDragging ? 'text-primary-500' : 'text-neutral-400'
            }`}
          />

          <h3 className="mt-4 text-lg font-semibold text-neutral-900">
            {error ? 'Upload Failed' : 'Upload PDF Document'}
          </h3>

          {error ? (
            <p className="mt-2 text-sm text-error-600">{error}</p>
          ) : (
            <>
              <p className="mt-2 text-sm text-neutral-600">
                Drag and drop your PDF here, or click to browse
              </p>
              <p className="mt-1 text-xs text-neutral-500">Maximum file size: 50MB</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
