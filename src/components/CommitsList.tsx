import type { GitHubCommit } from '@/types/github';
import { GitCommit, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface CommitsListProps {
  commits: GitHubCommit[];
}

export function CommitsList({ commits }: CommitsListProps) {
  if (commits.length === 0) {
    return null;
  }

  return (
    <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
      <div className="flex items-center gap-2 mb-4">
        <GitCommit className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Recent Commits</h3>
      </div>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin">
        {commits.map((commit, index) => (
          <a
            key={commit.sha}
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group opacity-0 animate-slide-in"
            style={{ animationDelay: `${350 + index * 50}ms` }}
          >
            <div className="flex items-start gap-3">
              {commit.author ? (
                <img
                  src={commit.author.avatar_url}
                  alt={commit.author.login}
                  className="w-6 h-6 rounded-full ring-1 ring-border flex-shrink-0"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <GitCommit className="w-3 h-3 text-muted-foreground" />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {commit.commit.message.split('\n')[0]}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="font-mono text-xs text-primary/80">
                    {commit.sha.slice(0, 7)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {commit.commit.author.name} • {formatDistanceToNow(new Date(commit.commit.author.date), { addSuffix: true })}
                  </span>
                </div>
              </div>
              
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
