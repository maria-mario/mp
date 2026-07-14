import { NextRequest, NextResponse } from 'next/server';
import { renderNewsletterById } from '@/lib/newsletter-render';

// Renders a newsletter's structured fields to HTML without sending anything —
// visit /api/preview-newsletter?id=1 in a browser to check the layout before sending.
export async function GET(request: NextRequest) {
  const id = Number(request.nextUrl.searchParams.get('id'));
  if (!id || isNaN(id)) {
    return NextResponse.json({ error: 'id query param required' }, { status: 400 });
  }

  try {
    const html = await renderNewsletterById(id);
    return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
