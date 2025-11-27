import { getPostData, getSortedPostsData } from '../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  // Await the params before using them
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  return (
    <div className="blog-container"> {/* Χρησιμοποιούμε το ίδιο container με το blog list */}
      <Link href="/blog" className="read-more">← Back to Blog</Link>
      
      <article className="prose">
        <h1 className="neon-text" style={{fontSize: '2.5rem', marginTop: '1rem'}}>{postData.title}</h1>
        <div className="post-date" style={{marginBottom: '2rem'}}>{postData.date}</div>
        
        <MDXRemote source={postData.content} />
      </article>
    </div>
  );
}