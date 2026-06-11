import BlogPostPageContent from '../../../src/page-content/BlogPostPage'
import { blogPosts } from '../../../src/data/blogData'

export const dynamic = 'force-dynamic'

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return {}

  return {
    title: `TalentElla | ${post.title}`,
    description: post.excerpt,
  }
}

export default function BlogPost() {
  return <BlogPostPageContent />
}
