'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
  fetch('http://localhost:3001/artists')
    .then((res) => res.json())
    .then((data) => setArtists(data));
}, []);


  return (
    <div className="max-w-6xl text-white mx-auto p-6">
      <h1 className="text-3xl font-bold h-full mb-6">Submitted Artists</h1>
      {artists.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <div key={index} className="border p-4 rounded shadow bg-white text-black">
              <h2 className="text-xl font-semibold mb-2">{artist.name}</h2>
              <p><strong>Category:</strong> {artist.category?.join(', ')}</p>
              <p><strong>Bio:</strong> {artist.bio}</p>
              <p><strong>Language(s):</strong> {artist.languages}</p>
              {artist.otherLanguage && <p><strong>Other Language:</strong> {artist.otherLanguage}</p>}
              <p><strong>Fee Range:</strong> {artist.feeRange}</p>
              <p><strong>Location:</strong> {artist.location}</p>
              {artist.image && <p><strong>Image:</strong> {artist.image}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
