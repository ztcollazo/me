# Portfolio

This is my portfolio, written in [Astro](https://astro.build), [React](https://reactjs.org), and [Tailwind CSS](https://tailwindcss.com). It uses the [Github GraphQL API](https://docs.github.com/en/graphql) to fetch project data and does some other awesome stuff too.

There is an about page, a home page (with some slick animations), a projects page (sorted by stars), and indivudal projects page (with readme, base64 decoded description, topics, and links), and resume.

If you find a bug or have a feature suggestion, please open an issue [here](https://github.com/ztcollazo/me/issues).

## Development

To run locally, follow the steps below:

1. `git clone https://github.com/ztcollazo/me.git`
2. `yarn`
3. Create a file called `.env.local` in the project root, and fill it in with the variable `GITHUB_TOKEN` where the value is a github token with at least repo reading permissions.
4. `yarn dev`
