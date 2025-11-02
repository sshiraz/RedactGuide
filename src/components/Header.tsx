import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            RedactGuide
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <Link
              to="/upload"
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                location.pathname === '/upload'
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}
            >
              Get Started
            </Link>
          </nav>

          <Link
            to="/upload"
            className="sm:hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Start
          </Link>
        </div>
      </div>
    </header>
  );
}
