import type { GitHubRepo } from '@/types/github';
import { ExternalLink, BookOpen, Globe } from 'lucide-react';

interface RepoHeaderProps {
  repo: GitHubRepo;
}

export function RepoHeader({ repo }: RepoHeaderProps) {
  return (
    <div className="glass-card p-6 glow-effect opacity-0 animate-fade-in">
      <div className="flex items-start gap-4">
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          className="w-16 h-16 rounded-xl ring-2 ring-primary/30"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <a
              href={repo.owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {repo.owner.login}
            </a>
            <span className="text-muted-foreground">/</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
            {repo.name}
          </h1>
          
          {repo.description && (
            <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-2">
              {repo.description}
            </p>
          )}

          {/* Topics */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {repo.topics.slice(0, 8).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-md"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg text-sm font-medium transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              View Repository
              <ExternalLink className="w-3 h-3" />
            </a>
            
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors"
              >
                <Globe className="w-4 h-4" />
                Website
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
