import { Dancing_Script, Poppins } from 'next/font/google';
import Cake from '@/components/Cake';
import Confetti from '@/components/Confetti';

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '700' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

// Correct way to handle params in Next.js 15+ (async params) or standard 14
// Using standard Props interface for safety
interface PageProps {
    params: Promise<{ name: string }>;
}

export default async function BirthdayPage({ params }: PageProps) {
    const { name } = await params;
    const decodedName = decodeURIComponent(name);

    return (
        <main className={`flex min-h-screen flex-col items-center justify-center overflow-hidden ${poppins.className}`}>
            <Confetti />
            <div className="glass-card p-12 rounded-[25px] flex flex-col items-center animate-[cardFloat_6s_ease-in-out_infinite]">
                <Cake />

                <div className="flex flex-col items-center mt-8">
                    <div className="text-white font-semibold tracking-[3px] text-lg uppercase opacity-0 animate-[fadeInUp_1s_ease-out_forwards_4s] drop-shadow-md">
                        Happy Birthday my Love,
                    </div>
                    <div className={`text-7xl mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] to-[#c2185b] opacity-0 scale-50 animate-[popInText_1s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards_4.5s] drop-shadow-sm ${dancingScript.className}`}>
                        {decodedName}!
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popInText {
            to { opacity: 1; transform: scale(1); }
        }
      `}</style>
        </main>
    );
}
