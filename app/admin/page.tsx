'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('artistSubmissions') || '[]');
    setSubmissions(saved);
  }, []);

  const handleDelete = (index: number) => {
    const updated = [...submissions];
    updated.splice(index, 1);
    setSubmissions(updated);
    localStorage.setItem('artistSubmissions', JSON.stringify(updated));
  };

  return (
    <div className="p-3 text-white">
      <h1 className="text-4xl text-center font-bold mb-6">Manager Dashboard</h1>
      {submissions.length === 0 ? (
        <p className="text-center text-gray-400">No artist submissions available.</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Location</th>
              <th className="p-2">Fee</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((artist, index) => (
              <tr key={index} className="border-t bg-slate-900">
                <td className="p-2">{artist.name}</td>
                <td className="p-2">{artist.category?.join(', ')}</td>
                <td className="p-2">{artist.location}</td>
                <td className="p-2">{artist.feeRange}</td>
                <td className="p-2 space-x-3">
                  <button className="text-blue-500 underline">View</button>
                  <button
                    className="text-red-500 underline"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
