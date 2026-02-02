export function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header skeleton */}
      <div className="glass-card p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-muted" />
          <div className="flex-1">
            <div className="h-4 w-24 bg-muted rounded mb-2" />
            <div className="h-8 w-48 bg-muted rounded mb-3" />
            <div className="h-4 w-full max-w-md bg-muted rounded mb-4" />
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted rounded" />
              <div className="h-6 w-20 bg-muted rounded" />
              <div className="h-6 w-14 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="glass-card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted" />
              <div>
                <div className="h-3 w-12 bg-muted rounded mb-2" />
                <div className="h-5 w-16 bg-muted rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section skeleton */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <div className="h-5 w-32 bg-muted rounded mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div className="flex-1">
                  <div className="h-3 w-full bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <div className="h-5 w-32 bg-muted rounded mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
