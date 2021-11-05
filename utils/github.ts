import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  userAgent: 'ztcollazo/me 1.0.0',
  timeZone: 'America/New_York',
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export default octokit;
