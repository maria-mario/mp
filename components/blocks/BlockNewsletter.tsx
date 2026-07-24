import type { BlockNewsletterData } from '@/lib/pages';
import { getSiteCopy } from '@/lib/site-settings';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';

/**
 * Newsletter band for the page builder. Every string defaults to the global
 * copy in site_settings; a block only overrides what it fills in.
 */
export default async function BlockNewsletter({ block }: { block: BlockNewsletterData }) {
  const copy = await getSiteCopy();

  return (
    <NewsletterSignup
      anchorId={block.anchor_id || 'newsletter'}
      background={block.background ?? 'sienna'}
      heading={block.heading || copy.newsletterHeading}
      body={block.body || copy.newsletterBody}
      buttonLabel={block.button_label || copy.newsletterButtonLabel}
      privacyLine={block.privacy_line || copy.newsletterPrivacyLine}
    />
  );
}
