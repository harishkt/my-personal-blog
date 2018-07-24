module.exports = {
	siteMetadata: {
		title: 'Personal Blog',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-emotion',
		{
			resolve: 'gatsby-source-goodreads',
			options: {
				developerKey: '0rJ8UCqM2D4Vcje6ZfTfmg',
				goodReadsUserId: '5571664-harish-kumar'
			}
		},
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: './src/utils/typography.js'
			}
		}
	],
}
