'use client';

import React from 'react';

interface AdminTableProps {
  submissions: any[];
  onDeleteAction: (index: number) => void;
}

export default function AdminTable({ submissions, onDeleteAction }: AdminTableProps) {
  if (submissions.length === 0) {
    return <p className="text-center text-gray-400">No artist submissions available.</p>;
  }

  return (
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
                onClick={() => onDeleteAction(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
