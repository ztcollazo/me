import { graphql as g } from "@octokit/graphql";

export const graphql = g.defaults({
	headers: {
		"user-agent": "ztcollazo/me 1.0.0",
		Authorization: `bearer ${import.meta.env.GITHUB_TOKEN}`,
	},
});

export const getStars = async (url: string) => {
	const reqUrl = `https://api.github.com/repos/${url.split("/").at(-2)}/${url.split("/").at(-1)}`;
	const res = await fetch(reqUrl);
	const data = await res.json();
	return data.stargazers_count;
};

export const getReadme = async (
	name: string,
	owner = "ztcollazo",
): Promise<string> => {
	const { repository: project } = await graphql<{ repository }>(
		`
    query repository($owner: String!, $name: String!) {
		repository(owner: $owner, name: $name) {
			readmeMain: object(expression: "main:README.md") {
				... on Blob {
					text
				}
			}
			readmeMaster: object(expression: "master:README.md") {
				... on Blob {
					text
				}
			}
		}
    }
    `,
		{
			owner,
			name,
		},
	);

	return project.readmeMain?.text || project.readmeMaster?.text || "";
};
