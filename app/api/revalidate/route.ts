import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const SECRET = process.env.REVALIDATE_SECRET;

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');
  if (SECRET && secret !== SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { path?: string } = {};
  try { body = await request.json(); } catch { /* no body is fine */ }

  // Revalidate the specific path if provided, otherwise all CMS pages
  const paths = body.path ? [body.path] : ['/', '/about', '/consultation', '/forum-retreats', '/power-tools/book'];
  for (const p of paths) revalidatePath(p);

  return NextResponse.json({ revalidated: true, paths });
}
