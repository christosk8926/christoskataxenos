import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default async function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#7f5af0', textShadow: '0 0 10px rgba(127, 90, 240, 0.5)' }}>
            DevLog
          </h1>
          <p className="text-xl text-gray-400">
            Insights from the <span style={{ color: '#2cb67d' }}>digital frontier</span>.
          </p>
        </header>

        <div className="grid gap-6">
          {allPostsData.map(({ slug, date, title, description }) => (
            <Link href={`/blog/${slug}`} key={slug} className="group">
              <div 
                className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-[#2cb67d] hover:shadow-[0_0_15px_rgba(44,182,125,0.2)]"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h2 className="text-2xl font-bold group-hover:text-[#2cb67d] transition-colors">
                    {title}
                  </h2>
                  <span className="text-sm font-mono text-[#7f5af0]">
                    {date}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
