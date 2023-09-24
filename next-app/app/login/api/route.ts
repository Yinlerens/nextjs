import { NextResponse } from 'next/server';

export async function GET() {
  // const data = await res.json();

  return NextResponse.json({ 1: 2 });
}
