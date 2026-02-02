import { Github, Sparkles } from 'lucide-react';
import { SearchInput } from '@/components/SearchInput';
import { RepoHeader } from '@/components/RepoHeader';
import { StatsGrid } from '@/components/StatsGrid';
import { ContributorsList } from '@/components/ContributorsList';
import { CommitsList } from '@/components/CommitsList';
import { LanguagesChart } from '@/components/LanguagesChart';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { useGitHubData } from '@/hooks/useGitHubData';

const EXAMPLE_REPOS = [
  'facebook/react',
  'microsoft/vscode',
  'vercel/next.js',
  'tailwindlabs/tailwindcss',
];

export default function Index() {
  const { loading, error, data, fetchRepoData } = useGitHubData();

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Explore any GitHub repository</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">GitHub Project</span>
            <br />
            <span className="text-foreground">Data Viewer</span>
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Get detailed insights into any public repository — stats, contributors, commits, and more.
          </p>

          <SearchInput onSearch={fetchRepoData} loading={loading} />

          {/* Example repos */}
          {!data && !loading && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-muted-foreground">Try:</span>
              {EXAMPLE_REPOS.map((repo) => (
                <button
                  key={repo}
                  onClick={() => fetchRepoData(repo)}
                  className="text-sm font-mono text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  {repo}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Error state */}
        {error && (
          <div className="glass-card p-6 border-destructive/50 text-center max-w-md mx-auto mb-8">
            <p className="text-destructive font-medium">{error}</p>
          </div>
        )}

        {/* Loading state */}
        {loading && <LoadingSkeleton />}

        {/* Data display */}
        {data && !loading && (
          <div className="space-y-6">
            <RepoHeader repo={data.repo} />
            <StatsGrid repo={data.repo} />
            <LanguagesChart languages={data.languages} />
            
            <div className="grid md:grid-cols-2 gap-6">
              <ContributorsList contributors={data.contributors} />
              <CommitsList commits={data.commits} />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <Github className="w-4 h-4" />
            <span>Powered by GitHub API</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
