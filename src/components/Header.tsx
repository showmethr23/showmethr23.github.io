
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">
          My Site
        </Link>
        <nav>
          <Link href="/" className="px-4">Blog</Link>
          <Link href="/projects" className="px-4">Projects</Link>
          <Link href="/about" className="px-4">About</Link>
          <Link href="/resume" className="px-4">Resume</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
