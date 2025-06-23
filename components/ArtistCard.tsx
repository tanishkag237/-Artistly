"use client";
import { cn } from "@/lib/utils";
import { Artist } from "@/lib/artist";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover bg-center"
        )}
        style={{
          backgroundImage: `url(${artist.image || 'https://via.placeholder.com/300'})`,
        }}
      >
        <div className="absolute inset-0 px-20 bg-black opacity-20 group-hover/card:opacity-60 transition duration-300" />

        <div className="z-10 text-white">
          <h3 className="text-xl font-bold">{artist.name}</h3>
          <p className="text-md text-white text-shadow font-semibold">
            {artist.category} • {artist.location}
          </p>
        </div>

        <div className="z-10">
          <p className="text-md text-gray-200 text-shadow font-semibold">{artist.feeRange}</p>
          <button
            onClick={() => alert(`Quote Request sent for ${artist.name}`)}
            className="mt-2 bg-slate-800 text-white text-sm px-4 py-2 rounded hover:bg-slate-950"
            aria-label={`Request quote for ${artist.name}`}
          >
            Ask for Quote
           
          </button>
        </div>
      </div>
    </div>
  );
}
