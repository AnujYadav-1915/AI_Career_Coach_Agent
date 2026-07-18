'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Something went wrong!</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We encountered an unexpected error while processing your request. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md flex-1"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-white text-blue-700 border border-blue-200 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex-1"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
