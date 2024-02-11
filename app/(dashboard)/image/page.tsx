import TopBar from '@/components/top-bar';
import { Image } from 'lucide-react';
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor='orange' label="Image generator" Icon={Image} />
      <main className="text-gray-900">
        <h1>Image generation</h1>
      </main>
    </div>
  );
}

export default page