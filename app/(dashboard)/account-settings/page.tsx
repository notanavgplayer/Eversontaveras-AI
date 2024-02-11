import TopBar from '@/components/top-bar';
import { Settings2 } from 'lucide-react';

const page = () => {
  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor="rose" label="Account settings" Icon={Settings2} />
      <main className="text-gray-900">
        <h1>Image generation</h1>
      </main>
    </div>
  );
}

export default page