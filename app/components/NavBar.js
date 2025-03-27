
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 whitespace-nowrap">

        <div className="flex justify-between items-center lg:space-x-8">
          <Link href="/" className="sm:text-xl lg:text-2xl font-bold hover:text-blue-500">
            Hyun Tae Kim
          </Link>

          <div className="flex space-x-4 sm:space-x-2 lg:space-x-8">
            <Link
              href="/projects"
              className="sm:text-xs lg:text-lg hover:text-blue-500 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="sm:text-xs lg:text-lg hover:text-blue-500 transition duration-300"
            >
              Experience
            </Link>
            <Link
              href="/personal"
              className="sm:text-xs lg:text-lg hover:text-blue-500 transition duration-300"
            >
              Hobbies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

