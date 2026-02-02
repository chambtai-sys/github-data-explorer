import { useState } from 'react';
import type { RepoData, GitHubRepo, GitHubContributor, GitHubCommit, GitHubLanguages } from '@/types/github';

const BASE_URL = 'https://api.github.com';

export function useGitHubData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<RepoData | null>(null);

  const parseRepoInput = (input: string): { owner: string; repo: string } | null => {
    // Handle full GitHub URLs
    const urlMatch = input.match(/github\.com\/([^\/]+)\/([^\/\s]+)/);
    if (urlMatch) {
      return { owner: urlMatch[1], repo: urlMatch[2].replace(/\.git$/, '') };
    }
    
    // Handle owner/repo format
    const shortMatch = input.match(/^([^\/\s]+)\/([^\/\s]+)$/);
    if (shortMatch) {
      return { owner: shortMatch[1], repo: shortMatch[2] };
    }
    
    return null;
  };

  const fetchRepoData = async (input: string) => {
    const parsed = parseRepoInput(input.trim());
    
    if (!parsed) {
      setError('Invalid repository format. Use "owner/repo" or a GitHub URL.');
      return;
    }

    const { owner, repo } = parsed;
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const [repoRes, contributorsRes, commitsRes, languagesRes] = await Promise.all([
        fetch(`${BASE_URL}/repos/${owner}/${repo}`),
        fetch(`${BASE_URL}/repos/${owner}/${repo}/contributors?per_page=10`),
        fetch(`${BASE_URL}/repos/${owner}/${repo}/commits?per_page=10`),
        fetch(`${BASE_URL}/repos/${owner}/${repo}/languages`),
      ]);

      if (!repoRes.ok) {
        if (repoRes.status === 404) {
          throw new Error('Repository not found. Check the owner and repo name.');
        }
        if (repoRes.status === 403) {
          throw new Error('API rate limit exceeded. Try again later.');
        }
        throw new Error('Failed to fetch repository data.');
      }

      const repoData: GitHubRepo = await repoRes.json();
      const contributorsData: GitHubContributor[] = contributorsRes.ok ? await contributorsRes.json() : [];
      const commitsData: GitHubCommit[] = commitsRes.ok ? await commitsRes.json() : [];
      const languagesData: GitHubLanguages = languagesRes.ok ? await languagesRes.json() : {};

      setData({
        repo: repoData,
        contributors: Array.isArray(contributorsData) ? contributorsData : [],
        commits: Array.isArray(commitsData) ? commitsData : [],
        languages: languagesData,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchRepoData };
}
