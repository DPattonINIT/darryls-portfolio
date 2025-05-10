'use client';

import { useState } from 'react';
import CodeProjects from '../components/CodeProjects';



export default function Home() {
  const [activeTab, setActiveTab] = useState<'code' | 'creativity'>('code');

  return (
    <main className="p-6">
      <div className="flex space-x-4 mb-6">
        
        
      </div>

      {activeTab === 'code' && <CodeProjects />}

    </main>
  );
}
