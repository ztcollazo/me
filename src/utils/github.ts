import { graphql as g } from '@octokit/graphql';

export const graphql = g.defaults({
  headers: {
    'user-agent': 'ztcollazo/me 1.0.0',
    Authorization: `bearer ${import.meta.env.GITHUB_TOKEN}`,
  },
});

interface BaseRepository {
  owner: {
    login: string,
    avatarUrl: string,
    url: string
  },
  isPrivate: boolean,
  stargazerCount: number,
  name: string,
  description: string,
  homepageUrl: string,
  url: string,
  openGraphImageUrl: string
}

type InitialRepo = BaseRepository & {
  readmeMain?: {
    text: string
  },
  readmeMaster?: {
    text: string
  },
  repositoryTopics: {
    edges: {
      node: {
        url: string
        topic: {
          name: string
        }
      }
    }[]
  }
}

export type Repository = BaseRepository & {
  readme: {
    text: string,
    url: string
  },
  topics: {
    url: string,
    name: string
  }[]
}

export const formatRepo = (repo: InitialRepo): Repository => {
  const topics = repo.repositoryTopics.edges.map((node) => ({
    ...node.node.topic, ...node.node,
  }));

  return Object.assign(repo, {
    topics,
    repositoryTopics: null,
    readmeMain: null,
    readmeMaster: null,
    readme: repo.readmeMain !== null
      ? { ...repo.readmeMain, url: `https://github.com/${repo.owner.login}/${repo.name}/blob/main/README.md` }
      : { ...repo.readmeMaster, url: `https://github.com/${repo.owner.login}/${repo.name}/blob/master/README.md` },
  });
};

export const getAllProjects = async (user = 'ztcollazo', limit = 20): Promise<Repository[]> => {
  const { user: u } = await graphql<{ user: { repositories: { edges: { node: InitialRepo }[] } } }>(
    `
      query topRepositories($user: String!, $limit: Int!) {
        user(login: $user) {
          repositories(first: $limit, orderBy: { direction: DESC, field: STARGAZERS }, affiliations: [OWNER, COLLABORATOR]) {
            edges {
              node {
                owner {
                  login
                  avatarUrl
                  url
                }
                name
                description
                isPrivate
                stargazerCount
                homepageUrl
                url
                openGraphImageUrl
                repositoryTopics(first: 100) {
                  edges {
                    node {
                      url
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      user,
      limit
    },
  );

  return u.repositories.edges.map((r) => formatRepo(r.node));
};

export const getProject = async (name: string, owner = 'ztcollazo', includeReadme = false): Promise<Repository> => {
  const { repository: project } = await graphql<{ repository: InitialRepo }>(
    `
    query repository($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        owner {
          login
          avatarUrl
          url
        }
        isPrivate
        name
        stargazerCount
        description
        homepageUrl
        url
        openGraphImageUrl
        ${includeReadme ? `readmeMain: object(expression: "main:README.md") {
          ... on Blob {
            text
          }
        }
        readmeMaster: object(expression: "master:README.md") {
          ... on Blob {
            text
          }
        }` : ''}
        repositoryTopics(first: 100) {
          edges {
            node {
              url
              topic {
                name
              }
            }
          }
        }
      }
    }
    `,
    {
      owner, name,
    },
  );

  return formatRepo(project);
};
