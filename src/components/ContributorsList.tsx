import type { GitHubContributor } from '@/types/github';
import { Users } from 'lucide-react';

interface ContributorsListProps {
  contributors: GitHubContributor[];
}

export function ContributorsList({ contributors }: ContributorsListProps) {
  if (contributors.length === 0) {
    return null;
  }

  const maxContributions = contributors[0]?.contributions || 1;

  return (
    <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Top Contributors</h3>
        <span className="text-xs text-muted-foreground font-mono">({contributors.length})</span>
      </div>
      
      <div className="space-y-3">
        {contributors.slice(0, 8).map((contributor, index) => {
          const percentage = (contributor.contributions / maxContributions) * 100;
          
          return (
            <a
              key={contributor.id}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group opacity-0 animate-slide-in"
              style={{ animationDelay: `${250 + index * 50}ms` }}
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-8 h-8 rounded-full ring-2 ring-border group-hover:ring-primary transition-all duration-200"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {contributor.login}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {contributor.contributions.toLocaleString()}
                  </span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
