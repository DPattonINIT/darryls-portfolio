// 'use client';

// import { useState } from 'react';
// import CodeProjects from '../components/CodeProjects';



// export default function Home() {
//   const [activeTab, setActiveTab] = useState<'code' | 'creativity'>('code');

//   return (
//     <main className="p-6">
//       <div className="flex space-x-4 mb-6">
        
        
//       </div>

//       {activeTab === 'code' && <CodeProjects />}

//     </main>
//   );
// }


// =================================================================
'use client';

import { useState } from 'react';
import CodeProjects from '../components/CodeProjects';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <AboutMe />
      <Skills />
      <CodeProjects />
      <Contact />
    </main>
  );
}

