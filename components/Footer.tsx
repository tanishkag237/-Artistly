import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; 2025 Artistly.com. All rights reserved.</p>
        <div className="space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <Link href="/admin" className="hover:underline">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
