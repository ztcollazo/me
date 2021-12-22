import { graphql as g } from '@octokit/graphql';

export const graphql = g.defaults({
  headers: {
    'user-agent': 'ztcollazo/me 1.0.0',
    Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export const formatRepo = (repo: any) => {
  const topics = repo.repositoryTopics.edges.map((node) => ({
    ...node.node.topic, ...node.node,
  }));

  return Object.assign(repo, {
    topics,
    repositoryTopics: null,
    readmeMain: null,
    readmeMaster: null,
    readme: repo.readmeMain !== null
      ? { ...repo.readmeMain, url: `https://github.com/${repo.owner.name}/${repo.name}/main/README.md` }
      : { ...repo.readmeMaster, url: `https://github.com/${repo.owner.name}/${repo.name}/master/README.md` },
  });
};

export const getAllProjects = async (user: string = 'ztcollazo', limit: number = 20) => {
  const { user: u } = await graphql<{ user: any }>(
    `
      query topRepositories($user: String!) {
        user(login: $user) {
          repositories(first: ${limit}, orderBy: { direction: DESC, field: STARGAZERS }, affiliations: [OWNER, COLLABORATOR]) {
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
    },
  );

  return u.repositories.edges.map((r) => formatRepo(r.node));
};

export const getProject = async (name: string, owner = 'ztcollazo', includeReadme = true) => {
  const { repository: project } = await graphql<{ repository: any }>(
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
