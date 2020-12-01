require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const makeRequest = (graphql, request) =>
	new Promise((resolve, reject) => {
		resolve(
			graphql(request).then((result) => {
				if (result.errors) {
					reject(result.errors);
					console.log(`check ${process.env.GATSBY_API_URL}`);
				}
				console.log(JSON.stringify(result));
				return result;
			})
		);
	});

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const allProjects = await makeRequest(
		graphql,
		`
    query {
      allStrapiProject {
        edges {
          node {
            Name
            Email
            Description
            ProjectLength
            Employer
            id
          }
        }
      }
    }
  `
	);

	const createAllProjectPages = allProjects.data.allStrapiProject.edges.forEach(
		({ node }) => {
			createPage({
				path: `${node.id}`,
				component: path.resolve(`./src/templates/projects.js`),
				context: {
					id: node.id,
				},
			});
		}
	);

	return createAllProjectPages;
};
