import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(
        {
            status: 'ok',
            uptime: process.uptime(),
            timestamp: Date.now(),
            memory: process.memoryUsage().rss
        },
        {
            status:200,
            headers: {
                'Cache-Control': 'no-store',
            }
        }
    );
}