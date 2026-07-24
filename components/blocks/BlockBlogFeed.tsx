import { LatestBlogPosts } from '@/components/sections/LatestBlogPosts';
import { getHomepageCopy } from '@/lib/homepage';
import { getAllPosts } from '@/lib/blog';

/** Recent posts band. Section copy is shared with the homepage blog section. */
export default async function BlockBlogFeed() {
  const [copy, posts] = await Promise.all([getHomepageCopy(), getAllPosts()]);
  return <LatestBlogPosts copy={copy} posts={posts.slice(0, 3)} />;
}
