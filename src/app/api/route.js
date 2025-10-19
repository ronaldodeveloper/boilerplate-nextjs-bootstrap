

// EXEMPLO DE CHAMADA DE API EXTERNA
  
import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl= process.env.NEXT_PUBLIC_MILHASPIX_API_URL

  try {
    const response = await fetch(`${apiUrl}/simulate-offers-list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(response.status)
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching offers:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch offers', details: error.message },
      { status: 500 }
    );
  }
}