'use client';

import { useEffect, useState } from 'react';
import FilterBar from '../../components/FilterBar';
import ArtistCard from '../../components/ArtistCard';
import { Artist } from '@/lib/artist';

export default function ArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filtered, setFiltered] = useState<Artist[]>([]);
  const [filters, setFilters] = useState<{
    category: string;
    location: string;
    feeRange: string;
  }>({
    category: '',
    location: '',
    feeRange: '',
  });

  useEffect(() => {
    fetch('/data/artists.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch artists data');
        return res.json();
      })
      .then((data: Artist[]) => {
        setArtists(data);
        setFiltered(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const results = artists.filter((a) =>
      (filters.category === '' || filters.category === 'all' || a.category === filters.category) &&
      (filters.location === '' || filters.location === 'all' || a.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.feeRange === '' || filters.feeRange === 'all' || a.feeRange === filters.feeRange)
    );
    setFiltered(results);
  }, [filters, artists]);

  function handleFilterChange(field: keyof typeof filters, value: string) {
    setFilters((prev) => ({ ...prev, [field]: value }));
  }

  return (
  <div className="max-w-7xl mx-auto p-4 px-6 text-white">
    <h1 className="lg:text-4xl text-2xl text-center mb-9 font-bold">Explore Artists</h1>
    <FilterBar filters={filters} onChange={handleFilterChange} />

    {filtered.length === 0 ? (
      <p className="text-gray-600 text-center mt-10">No artists found matching the filters.</p>
    ) : (
      <div className="px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {filtered.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    )}
  </div>
);
}
