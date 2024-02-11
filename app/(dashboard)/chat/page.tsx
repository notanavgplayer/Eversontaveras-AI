import TopBar from '@/components/top-bar';
import { MessageSquareIcon } from 'lucide-react';
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor="lime" label="Chat" Icon={MessageSquareIcon} />
      <main className="text-gray-900">
        <h1>Chat</h1>
      </main>
    </div>
  );
}

export default page