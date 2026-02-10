import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Happy Birthday!';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

interface Props {
    params: Promise<{ name: string }>;
}

export default async function Image({ params }: Props) {
    const { name } = await params;
    const decodedName = decodeURIComponent(name);

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
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.25)',
                        borderRadius: '30px',
                        padding: '60px 80px',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                    }}
                >
                    <div style={{ fontSize: 40, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '4px' }}>
                        Happy Birthday
                    </div>
                    <div style={{ fontSize: 100, fontWeight: 'bold', textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                        {decodedName}!
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
