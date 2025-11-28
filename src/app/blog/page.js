import { getSortedPostsData } from '../../lib/posts';
import SpotlightCard from '../../components/SpotlightCard';

export const metadata = {
  title: 'Blog | Christos Kataxenos',
  description: 'Thoughts, ideas, and developer diaries.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="min-h-screen p-8 font-sans">
      <div className="max-w-[800px] mx-auto space-y-6">
        
        <header className="mb-12 text-center pt-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-400">
            Insights from the digital frontier.
          </p>
        </header>

        <div className="flex flex-col space-y-8">
          {allPostsData.map(({ slug, date, title, description }) => (
            <SpotlightCard
              href={`/blog/${slug}`}
              key={slug}
              style={{ width: '100%', height: 'auto', minHeight: '200px', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '2rem' }}
            >
                <div className="flex flex-col w-full h-full text-left">
                    <time className="text-xs font-mono text-gray-500 mb-4 block">
                    {date}
                    </time>

                    <h2 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-purple-400 transition-colors">
                    {title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed text-sm">
                    {description}
                    </p>
                </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </main>
  );
}
