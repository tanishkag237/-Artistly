import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[rgba(0,0,0,0.8)] shadow-sm sticky top-0 z-50 text-accent backdrop-blur-sm p-2">
      <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/"><h1 className="text-xl font-bold text-white">Artistly</h1></Link>
        <nav className="flex gap-6 text-sm font-medium text-white">
          <Link href="/">Home</Link>
          <Link href="/onboard">Onboard</Link>
          <Link href="/artists">Explore</Link>
        </nav>
      </div>
    </header>
  );
}
