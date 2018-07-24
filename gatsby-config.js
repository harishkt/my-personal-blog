module.exports = {
	siteMetadata: {
		title: 'Personal Blog',
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'z5408kyv5fbc',
				accessToken: '1a38d3febe77de66939b7f0b32554cae483e2159ff7968d9b8777b3310f87c1f'
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-remark',
		'gatsby-plugin-emotion',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
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
