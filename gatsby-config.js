module.exports = {
	siteMetadata: {
		title: `Nicea`,
		description: `Like Upwork, Fiverr, all those. Just 1000% better and more exclusive.`,
		author: `Sung Woo`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: 'https://nicea-job-board-backend.herokuapp.com/',
				contentTypes: ['company', 'project', 'contractor'],
				queryLimit: 100,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Nicea - Top Talent and top Projects`,
				short_name: `Nicea`,
				start_url: `/`,
				background_color: `#f2f2f2`,
				display: `minimal-ui`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
