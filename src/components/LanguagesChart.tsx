import type { GitHubLanguages } from '@/types/github';
import { Code2 } from 'lucide-react';

interface LanguagesChartProps {
  languages: GitHubLanguages;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-lang-typescript',
  JavaScript: 'bg-lang-javascript',
  Python: 'bg-lang-python',
  Rust: 'bg-lang-rust',
  Go: 'bg-lang-go',
  Java: 'bg-lang-java',
  Ruby: 'bg-lang-ruby',
  'C++': 'bg-lang-cpp',
  'C#': 'bg-lang-csharp',
  PHP: 'bg-lang-php',
  Swift: 'bg-lang-swift',
  Kotlin: 'bg-lang-kotlin',
};

export function LanguagesChart({ languages }: LanguagesChartProps) {
  const entries = Object.entries(languages);
  
  if (entries.length === 0) {
    return null;
  }

  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);
  const sortedLanguages = entries
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: (bytes / total) * 100,
    }))
    .sort((a, b) => b.bytes - a.bytes);

  return (
    <div className="glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Languages</h3>
      </div>

      {/* Progress bar */}
      <div className="h-3 rounded-full overflow-hidden flex mb-4">
        {sortedLanguages.map((lang, index) => (
          <div
            key={lang.name}
            className={`${LANGUAGE_COLORS[lang.name] || 'bg-lang-default'} transition-all duration-500`}
            style={{ 
              width: `${lang.percentage}%`,
              animationDelay: `${450 + index * 30}ms`,
            }}
            title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {sortedLanguages.slice(0, 8).map((lang, index) => (
          <div
            key={lang.name}
            className="flex items-center gap-2 opacity-0 animate-fade-in"
            style={{ animationDelay: `${500 + index * 50}ms` }}
          >
            <div className={`w-3 h-3 rounded-full ${LANGUAGE_COLORS[lang.name] || 'bg-lang-default'}`} />
            <span className="text-xs text-muted-foreground">
              {lang.name}
            </span>
            <span className="font-mono text-xs text-foreground">
              {lang.percentage.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
