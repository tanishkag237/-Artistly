import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative py-16 text-white text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home/herobg.jpg"
        alt="Call to action background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
       <div className="absolute inset-0 bg-black opacity-60 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-20 px-4">
        <h3 className="text-2xl font-semibold mb-4">Are you a performer?</h3>
        <p className="mb-6">Join Artistly and get discovered by event planners across India.</p>
        <Link href="/onboard">
          <button className="bg-white text-slate-800 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Onboard as Artist
          </button>
        </Link>
      </div>
    </section>
  );
}
