import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="sticky bottom-0 left-0 w-full bg-gray-800 text-white py-4 mt-auto">
            <div className="flex justify-center gap-6">
                <Link href="https://github.com/hyuntaekim1738" target="_blank" className="text-gray-500 hover:text-gray-700">
                <FaGithub size={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/hyuntaekim8371/" target="_blank" className="text-gray-500 hover:text-gray-700">
                <FaLinkedin size={30} />
                </Link>
                <Link href="https://docs.google.com/document/d/1W_xacfOZdRYyDEKO9YM7j4eX8XFqArvl2lxq2UThxlA/edit?usp=sharing" target="_blank" className="text-gray-500 hover:text-gray-700">
                <FaFileAlt size={30} />
                </Link>
            </div>
        </footer>
    );
}

