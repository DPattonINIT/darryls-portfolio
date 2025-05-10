'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Darryl Patton
      </motion.h1>

      <motion.button
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-xl transition-all shadow-lg"
        whileHover={{ scale: 1.1 }}
        onClick={() => router.push('/code')}
      >
        Enter
      </motion.button>
    </div>
  );
}
