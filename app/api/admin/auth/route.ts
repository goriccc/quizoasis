import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body || {};

    if (!password) {
      return NextResponse.json({ error: 'Password required' }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD || 'sv586lon!!';
    
    if (password !== adminPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // JWT 토큰 생성 (24시간 유효)
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'admin-secret-key');
    const token = await new SignJWT({ admin: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);

    return NextResponse.json({ 
      success: true, 
      token,
      message: 'Authentication successful' 
    });

  } catch (error) {
    console.error('[admin-auth] Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
