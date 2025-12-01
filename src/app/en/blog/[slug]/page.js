import { getPostData, getSortedPostsData } from '../../../../lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import rehypePrettyCode from 'rehype-pretty-code';
import Stats from '../../../../components/Stats';
import Callout from '../../../../components/Callout';
import InteractionDock from '../../../../components/InteractionDock';

export async function generateStaticParams() {
  const posts = getSortedPostsData('en');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  try {
    const post = getPostData(resolvedParams.slug, 'en');
    
    if (!post) {
      return;
    }

    const { title, date, description } = post;

    return {
      title: `${title} | Christos Kataxenos DevLog`,
      description: description,
      openGraph: {
        title: title,
        description: description,
        type: 'article',
        publishedTime: date,
        authors: ['Christos Kataxenos'],
        images: [
          {
            url: 'https://christoskataxenos.com/images/og-default.png',
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
    };
  }
}

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',
 
  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ['word--highlighted'];
  },
};

export default async function Post({ params }) {
  // Await the params before using them
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug, 'en');

  return (
    <div className="mx-auto max-w-3xl py-8 pt-32 px-6">
      <InteractionDock title={postData.title} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: postData.title,
            datePublished: postData.date,
            description: postData.description,
            author: {
              '@type': 'Person',
              name: 'Christos Kataxenos',
              url: 'https://christoskataxenos.com',
            },
          }),
        }}
      />

      <article className="prose prose-invert max-w-none font-sans prose-p:font-sans prose-headings:font-sans prose-li:font-sans prose-strong:font-sans leading-loose space-y-6 text-gray-300">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {postData.title}
          </h1>
          
          {/* Ημερομηνία με Monospace για στυλ */}
          <div className="font-mono text-xs text-cyan-500/80 mb-12 border-b border-gray-800 pb-8">
            PUBLISHED: {postData.date}
          </div>
            
          <MDXRemote 
            source={postData.content}
            components={{ Stats, Callout }}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypePrettyCode, prettyCodeOptions],
                ],
              },
            }}
          />
      </article>
    </div>
  );
}