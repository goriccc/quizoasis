import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token } = body || {};

    if (!token) {
      return NextResponse.json({ error: 'Token required' }, { status: 400 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'admin-secret-key');
    
    try {
      const { payload } = await jwtVerify(token, secret);
      
      if (payload.admin === true) {
        return NextResponse.json({ 
          success: true, 
          valid: true,
          message: 'Token is valid' 
        });
      } else {
        return NextResponse.json({ 
          success: false, 
          valid: false,
          message: 'Invalid token' 
        });
      }
    } catch (jwtError) {
      return NextResponse.json({ 
        success: false, 
        valid: false,
        message: 'Token verification failed' 
      });
    }

  } catch (error) {
    console.error('[admin-verify] Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
