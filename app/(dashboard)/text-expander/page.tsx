import TopBar from '@/components/top-bar';
import { Brain } from 'lucide-react';
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor="cyan" label="Text expander" Icon={Brain} />
      <main className="text-gray-900">
        <h1>Text expander</h1>
      </main>
    </div>
  );
}

export default page