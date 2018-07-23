module.exports = {
  siteMetadata: {
    title: 'Personal Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography.js'
      }
    }
  ],
}
