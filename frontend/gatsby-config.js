module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://local.decoupled.com/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
  ],
}
