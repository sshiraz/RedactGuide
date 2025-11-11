import { DocumentTextIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FilePreviewProps {
  fileName: string;
  fileSize: number;
  pageCount?: number;
  onClear: () => void;
  onChooseAnother: () => void;
}

export default function FilePreview({
  fileName,
  fileSize,
  pageCount,
  onClear,
  onChooseAnother,
}: FilePreviewProps) {
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const truncateFileName = (name: string, maxLength: number = 40): string => {
    if (name.length <= maxLength) return name;
    const ext = name.split('.').pop();
    const nameWithoutExt = name.substring(0, name.lastIndexOf('.'));
    const truncated = nameWithoutExt.substring(0, maxLength - ext!.length - 4);
    return `${truncated}...${ext}`;
  };

  return (
    <div className="w-full max-w-2xl rounded-lg border border-neutral-200 bg-white p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
            <DocumentTextIcon className="h-6 w-6 text-primary-600" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-neutral-900 truncate">
            {truncateFileName(fileName)}
          </h3>

          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600">
            <span>{formatFileSize(fileSize)}</span>
            {pageCount !== undefined && <span>{pageCount} pages</span>}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={onChooseAnother}
              className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
            >
              Choose Another File
            </button>
            <button
              onClick={onClear}
              className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        <button
          onClick={onClear}
          className="flex-shrink-0 rounded-lg p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
          aria-label="Remove file"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
