import { Star, GitFork, Eye, AlertCircle, Code, Scale, Calendar, GitBranch } from 'lucide-react';
import type { GitHubRepo } from '@/types/github';
import { formatDistanceToNow } from 'date-fns';

interface StatsGridProps {
  repo: GitHubRepo;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export function StatsGrid({ repo }: StatsGridProps) {
  const stats = [
    {
      label: 'Stars',
      value: formatNumber(repo.stargazers_count),
      icon: Star,
      color: 'text-warning',
    },
    {
      label: 'Forks',
      value: formatNumber(repo.forks_count),
      icon: GitFork,
      color: 'text-info',
    },
    {
      label: 'Watchers',
      value: formatNumber(repo.watchers_count),
      icon: Eye,
      color: 'text-primary',
    },
    {
      label: 'Issues',
      value: formatNumber(repo.open_issues_count),
      icon: AlertCircle,
      color: 'text-success',
    },
    {
      label: 'Language',
      value: repo.language || 'N/A',
      icon: Code,
      color: 'text-lang-typescript',
    },
    {
      label: 'License',
      value: repo.license?.name || 'None',
      icon: Scale,
      color: 'text-muted-foreground',
    },
    {
      label: 'Size',
      value: formatBytes(repo.size * 1024),
      icon: GitBranch,
      color: 'text-primary',
    },
    {
      label: 'Last Push',
      value: formatDistanceToNow(new Date(repo.pushed_at), { addSuffix: true }),
      icon: Calendar,
      color: 'text-success',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="stat-card opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-secondary ${stat.color}`}>
              <stat.icon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              <p className="font-mono font-semibold text-foreground truncate max-w-[120px]" title={stat.value}>
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
