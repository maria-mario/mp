import { Testimonials } from '@/components/sections/Testimonials';
import { getTestimonials } from '@/lib/testimonials';

export default async function BlockTestimonials() {
  const items = await getTestimonials();
  return <Testimonials items={items} />;
}
