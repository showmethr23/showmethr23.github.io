
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white border-b border-[#e8e3d9] sticky top-0 z-50">
      <div className="page-container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-[#1c1a17] tracking-tight">
          Junyeong Choi
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm text-[#6b6862] hover:text-[#1c1a17] rounded-md hover:bg-[#f7f4ef] transition-colors whitespace-nowrap">
            Blog
          </Link>
          <Link href="/projects" className="px-3 py-2 text-sm text-[#6b6862] hover:text-[#1c1a17] rounded-md hover:bg-[#f7f4ef] transition-colors whitespace-nowrap">
            Projects
          </Link>
          <Link href="/about" className="px-3 py-2 text-sm text-[#6b6862] hover:text-[#1c1a17] rounded-md hover:bg-[#f7f4ef] transition-colors whitespace-nowrap">
            About
          </Link>
          <Link href="/resume" className="px-3 py-2 text-sm text-[#6b6862] hover:text-[#1c1a17] rounded-md hover:bg-[#f7f4ef] transition-colors whitespace-nowrap">
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
