// Renders the newsletter HTML email from structured Directus fields.
// Table-based layout with inline styles — required for email client compatibility
// (Outlook/Gmail don't support flexbox or external stylesheets).
// Mirrors Figma frame "newsletter-breaking-bad-habits" (fileKey 7WiCNrb9I8ipvBBzcWgBt6, node 907:265).

const COLORS = {
  orange: '#c04a2b',
  blue: '#3d8cad',
  dark: '#1a1a1a',
  gray: '#6b7280',
  beige: '#f5f2ee',
  headerBg: '#f5f5f5',
  black: '#111111',
};

const FONT_STACK = "Arial, Helvetica, sans-serif";

export interface NewsletterPostSummary {
  title: string;
  excerpt: string;
  url: string;
  imageUrl: string;
}

export interface NewsletterTemplateData {
  introTitle: string;
  introDescription: string;
  mainImageUrl: string;
  bodyContentHtml: string;
  promoBannerHeading?: string | null;
  promoBannerText?: string | null;
  promoBannerLinkText?: string | null;
  promoBannerLinkUrl?: string | null;
  promoBannerImageUrl?: string | null;
  finalBannerImageUrl?: string | null;
  finalBannerLinkUrl?: string | null;
  contactBannerHeading?: string | null;
  contactBannerSubtext?: string | null;
  contactBannerButtonText?: string | null;
  contactBannerButtonUrl?: string | null;
}

export interface NewsletterTemplateOptions {
  logoUrl: string;
  siteUrl: string;
  physicalAddress: string;
  /** Mailgun unsubscribe placeholder — substituted by Mailgun at send time via domain-level suppression tracking. */
  unsubscribeUrlPlaceholder?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function promoBannerSection(data: NewsletterTemplateData): string {
  if (!data.promoBannerHeading && !data.promoBannerImageUrl) return '';
  return `
  <tr>
    <td style="background-color:${COLORS.beige};padding:32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td valign="middle" style="font-family:${FONT_STACK};">
            ${data.promoBannerHeading ? `<p style="margin:0 0 16px 0;font-size:22px;font-weight:bold;color:${COLORS.dark};">${escapeHtml(data.promoBannerHeading)}</p>` : ''}
            ${data.promoBannerText ? `<p style="margin:0 0 16px 0;font-size:13px;line-height:1.5;color:${COLORS.dark};">${escapeHtml(data.promoBannerText)}</p>` : ''}
            ${data.promoBannerLinkText && data.promoBannerLinkUrl ? `<a href="${data.promoBannerLinkUrl}" style="font-size:14px;font-weight:bold;color:${COLORS.orange};text-decoration:underline;">${escapeHtml(data.promoBannerLinkText)}</a>` : ''}
          </td>
          ${data.promoBannerImageUrl ? `
          <td width="180" valign="top" align="right">
            <img src="${data.promoBannerImageUrl}" width="180" alt="" style="display:block;border-radius:8px;max-width:180px;height:auto;" />
          </td>` : ''}
        </tr>
      </table>
    </td>
  </tr>`;
}

function postsSection(posts: NewsletterPostSummary[]): string {
  if (!posts.length) return '';
  const rows = posts
    .map(
      (post, i) => `
        <tr>
          <td colspan="2" style="padding-top:${i === 0 ? '32' : '24'}px;padding-bottom:24px;border-top:${i === 0 ? '0' : '1'}px solid #e5e7eb;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="120" valign="top">
                  <img src="${post.imageUrl}" width="120" height="120" alt="" style="display:block;border-radius:8px;width:120px;height:120px;object-fit:cover;" />
                </td>
                <td width="16"></td>
                <td valign="top" style="font-family:${FONT_STACK};">
                  <p style="margin:0 0 8px 0;font-size:16px;font-weight:bold;color:${COLORS.dark};">${escapeHtml(post.title)}</p>
                  <p style="margin:0 0 8px 0;font-size:12px;line-height:1.5;color:${COLORS.gray};">${escapeHtml(post.excerpt)}</p>
                  <a href="${post.url}" style="font-size:13px;font-weight:bold;color:${COLORS.orange};text-decoration:none;">Read more &rarr;</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
    )
    .join('');
  return `
  <tr>
    <td style="padding:0 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${rows}
      </table>
    </td>
  </tr>`;
}

function finalBannerSection(data: NewsletterTemplateData): string {
  if (!data.finalBannerImageUrl) return '';
  const img = `<img src="${data.finalBannerImageUrl}" width="600" alt="" style="display:block;width:100%;max-width:600px;height:auto;" />`;
  return `
  <tr>
    <td>
      ${data.finalBannerLinkUrl ? `<a href="${data.finalBannerLinkUrl}">${img}</a>` : img}
    </td>
  </tr>`;
}

function contactBannerSection(data: NewsletterTemplateData): string {
  if (!data.contactBannerHeading && !data.contactBannerButtonText) return '';
  return `
  <tr>
    <td style="background-color:${COLORS.orange};padding:24px 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td valign="middle" style="font-family:${FONT_STACK};">
            ${data.contactBannerHeading ? `<p style="margin:0 0 4px 0;font-size:19px;font-weight:bold;color:#ffffff;">${escapeHtml(data.contactBannerHeading)}</p>` : ''}
            ${data.contactBannerSubtext ? `<p style="margin:0;font-size:13px;color:rgba(255,255,255,0.8);">${escapeHtml(data.contactBannerSubtext)}</p>` : ''}
          </td>
          ${data.contactBannerButtonText && data.contactBannerButtonUrl ? `
          <td valign="middle" align="right">
            <a href="${data.contactBannerButtonUrl}" style="display:inline-block;background-color:#ffffff;color:${COLORS.orange};font-family:${FONT_STACK};font-size:13px;font-weight:bold;text-decoration:none;padding:12px 24px;border-radius:100px;">${escapeHtml(data.contactBannerButtonText)}</a>
          </td>` : ''}
        </tr>
      </table>
    </td>
  </tr>`;
}

export function renderNewsletterHTML(
  data: NewsletterTemplateData,
  posts: NewsletterPostSummary[],
  options: NewsletterTemplateOptions
): string {
  const unsubscribe = options.unsubscribeUrlPlaceholder ?? '%unsubscribe_url%';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(data.introTitle)}</title>
</head>
<body style="margin:0;padding:0;background-color:#e5e7eb;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:24px 0;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- header -->
          <tr>
            <td align="center" style="padding:16px 40px 10px 40px;">
              <img src="${options.logoUrl}" alt="Dr. Mark Pirtle" height="50" style="display:block;height:50px;width:auto;" />
            </td>
          </tr>

          <!-- intro -->
          <tr>
            <td align="center" style="background-color:${COLORS.headerBg};padding:34px 40px;font-family:${FONT_STACK};">
              <p style="margin:0 0 20px 0;font-size:29px;font-weight:bold;font-style:italic;color:${COLORS.dark};">${escapeHtml(data.introTitle)}</p>
              <p style="margin:0;font-size:14px;font-style:italic;line-height:1.6;color:${COLORS.gray};">${escapeHtml(data.introDescription)}</p>
            </td>
          </tr>

          <!-- main image -->
          <tr>
            <td>
              <img src="${data.mainImageUrl}" width="600" alt="" style="display:block;width:100%;max-width:600px;height:auto;" />
            </td>
          </tr>

          <!-- body -->
          <tr>
            <td style="padding:46px 40px 51px 40px;font-family:${FONT_STACK};font-size:13px;line-height:1.7;color:${COLORS.dark};">
              ${data.bodyContentHtml}
            </td>
          </tr>

          ${promoBannerSection(data)}
          ${postsSection(posts)}
          ${finalBannerSection(data)}
          ${contactBannerSection(data)}

          <!-- footer -->
          <tr>
            <td align="center" style="background-color:${COLORS.black};padding:32px 40px;font-family:${FONT_STACK};">
              <p style="margin:0 0 12px 0;font-size:10px;color:rgba(255,255,255,0.5);">Copyright &copy; ${new Date().getFullYear()} Dr. Mark Pirtle. All rights reserved.</p>
              <p style="margin:0 0 20px 0;font-size:10px;color:rgba(255,255,255,0.5);">${escapeHtml(options.physicalAddress)}</p>
              <p style="margin:0 0 4px 0;font-size:10px;color:rgba(255,255,255,0.25);">Want to change how you receive these emails?</p>
              <a href="${unsubscribe}" style="font-size:10px;color:#ffffff;text-decoration:underline;">Update your preferences or unsubscribe</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
