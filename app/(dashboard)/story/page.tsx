import TopBar from '@/components/top-bar';
import { Book } from 'lucide-react';
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor="lime" label="story generator" Icon={Book} />
      <main className="text-gray-900">
        <h1>Story</h1>
      </main>
    </div>
  );
}

export default page