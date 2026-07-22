import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export function getAdminJwtSecret(): Uint8Array {
  return new TextEncoder().encode(process.env.JWT_SECRET || 'admin-secret-key');
}

/** Authorization Bearer, x-admin-token header, or JSON body.token */
export async function extractAdminToken(req: NextRequest, body?: { token?: string }): Promise<string | null> {
  const auth = req.headers.get('authorization');
  if (auth?.toLowerCase().startsWith('bearer ')) {
    const t = auth.slice(7).trim();
    if (t) return t;
  }
  const headerToken = req.headers.get('x-admin-token')?.trim();
  if (headerToken) return headerToken;
  if (body?.token && typeof body.token === 'string' && body.token.trim()) {
    return body.token.trim();
  }
  return null;
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, getAdminJwtSecret());
    return payload.admin === true;
  } catch {
    return false;
  }
}

export async function requireAdmin(
  req: NextRequest,
  body?: { token?: string },
): Promise<{ ok: true } | { ok: false; response: NextResponse }> {
  const token = await extractAdminToken(req, body);
  if (!token) {
    return {
      ok: false,
      response: NextResponse.json({ error: 'Admin authentication required' }, { status: 401 }),
    };
  }
  const valid = await verifyAdminToken(token);
  if (!valid) {
    return {
      ok: false,
      response: NextResponse.json({ error: 'Invalid or expired admin token' }, { status: 401 }),
    };
  }
  return { ok: true };
}
