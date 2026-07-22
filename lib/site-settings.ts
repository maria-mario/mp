// lib/site-settings.ts
// Global site media, managed in the Directus `site_settings` singleton.
//
// Every value falls back to the bundled file in /public, so the logo and hero
// never disappear if Directus is unreachable. Directus is the source of truth.

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN;

export type SiteMedia = {
  logo: string;
  logoMark: string;
  heroImage: string;
  aboutPortrait: string;
};

/** Bundled originals — also the fallback when Directus can't be reached. */
const LOCAL_FALLBACK: SiteMedia = {
  logo: '/logos/logo-2026.png',
  logoMark: '/logos/logo.webp',
  heroImage: '/images/mark-hero-v3.webp',
  aboutPortrait: '/images/mark-hero-v3.webp',
};

type SettingsRow = {
  logo: string | null;
  logo_mark: string | null;
  hero_image: string | null;
  about_portrait: string | null;
};

function assetUrl(fileId: string | null, fallback: string): string {
  return fileId ? `${DIRECTUS_URL}/assets/${fileId}` : fallback;
}

export async function getSiteMedia(): Promise<SiteMedia> {
  if (!DIRECTUS_URL) return LOCAL_FALLBACK;

  try {
    const res = await fetch(
      `${DIRECTUS_URL}/items/site_settings?fields=logo,logo_mark,hero_image,about_portrait`,
      {
        headers: DIRECTUS_TOKEN ? { Authorization: `Bearer ${DIRECTUS_TOKEN}` } : {},
        next: { tags: ['site-settings'] },
      }
    );
    if (!res.ok) throw new Error(`Directus responded ${res.status}`);

    const row: SettingsRow | undefined = (await res.json())?.data;
    if (!row) throw new Error('site_settings singleton is empty');

    return {
      logo:          assetUrl(row.logo,           LOCAL_FALLBACK.logo),
      logoMark:      assetUrl(row.logo_mark,      LOCAL_FALLBACK.logoMark),
      heroImage:     assetUrl(row.hero_image,     LOCAL_FALLBACK.heroImage),
      aboutPortrait: assetUrl(row.about_portrait, LOCAL_FALLBACK.aboutPortrait),
    };
  } catch (err) {
    console.error('[site-settings] Directus fetch failed, using local assets:', err);
    return LOCAL_FALLBACK;
  }
}
