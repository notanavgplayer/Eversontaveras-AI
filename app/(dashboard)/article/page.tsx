import TopBar from '@/components/top-bar';
import { Book, FileText } from 'lucide-react';
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor="amber" label="Article summarizer" Icon={FileText} />
      <main className="text-gray-900">
        <h1>Articel summarizer</h1>
      </main>
    </div>
  );
}

export default page