'use client';

import { useEffect, useState } from 'react';
import AdminTable from '@/components/AdminTable';

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
      <AdminTable submissions={submissions} onDeleteAction={handleDelete} />
    </div>
  );
}
