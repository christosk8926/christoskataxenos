import { getPostData, getSortedPostsData } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = getPostData(slug);
  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-6 md:p-12 font-sans">
      <article className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-block mb-8 text-[#94a1b2] hover:text-[#7f5af0] transition-colors"
        >
          ← Back to Blog
        </Link>
        
        <header className="mb-10 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#fffffe' }}>
            {postData.title}
          </h1>
          <div className="flex items-center gap-4 text-sm font-mono">
            <span style={{ color: '#7f5af0' }}>{postData.date}</span>
            <span className="text-gray-600">|</span>
            <span style={{ color: '#2cb67d' }}>MDX Post</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none" style={{
          '--tw-prose-headings': '#fffffe',
          '--tw-prose-links': '#2cb67d',
          '--tw-prose-code': '#7f5af0',
          '--tw-prose-pre-bg': '#16161a',
        }}>
          <MDXRemote source={postData.content} />
        </div>
      </article>
    </div>
  );
}