import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export const metadata = {
  title: 'Blog | Christos Kataxenos',
  description: 'Thoughts, ideas, and developer diaries.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="min-h-screen p-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        <header className="mb-16 text-center pt-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-400">
            Insights from the digital frontier.
          </p>
        </header>

        <div className="space-y-6">
          {allPostsData.map(({ slug, date, title, description }) => (
            <Link href={`/blog/${slug}`} key={slug} className="block group no-underline">
              <article className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
                
                <time className="text-xs font-mono text-gray-500 mb-4 block">
                  {date}
                </time>
                
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {title}
                </h2>
                
                <p className="text-gray-400 leading-relaxed">
                  {description}
                </p>
                
                <div className="mt-6 flex items-center text-sm text-gray-500 group-hover:text-white transition-colors">
                  <span className="sr-only">Read more</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-purple-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}