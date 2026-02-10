'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dancing_Script, Poppins } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '700' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      router.push(`/${encodeURIComponent(name)}`);
    }
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${poppins.className}`}>
      <div className="glass-card p-12 rounded-3xl flex flex-col items-center max-w-lg w-full">
        <h1 className={`text-4xl mb-8 text-[#c2185b] ${dancingScript.className}`}>
          Make a Wish!
        </h1>
        <p className="mb-6 text-gray-700 text-center">
          Enter a name to generate a special birthday surprise.
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Name (e.g., Amna)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl border border-white/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
          />
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Celebrate!
          </button>
        </form>
      </div>
    </main>
  );
}
