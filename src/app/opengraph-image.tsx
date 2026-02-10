import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Happy Birthday Generator';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    textAlign: 'center',
                    padding: '40px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '20px',
                        padding: '40px 60px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.3)',
                    }}
                >
                    <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
                        Make a Wish! 🎂
                    </div>
                    <div style={{ fontSize: 40, opacity: 0.9 }}>
                        Generate a unique birthday surprise.
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
