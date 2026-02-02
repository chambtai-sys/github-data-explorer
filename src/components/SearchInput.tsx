import { useState } from 'react';
import { Search, Github } from 'lucide-react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

export function SearchInput({ onSearch, loading }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center">
          <div className="absolute left-4 text-muted-foreground">
            <Github className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter repo URL or owner/repo (e.g., facebook/react)"
            className="w-full pl-12 pr-32 py-4 bg-card border border-border rounded-xl font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 input-glow transition-all duration-300"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
            <span>{loading ? 'Loading' : 'Search'}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
