const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allContentfulPost(limit: 1000) {
					edges {
					  node {
						  id
						  slug
					  }
					}
				}
			}
		`).then(result => {
			const edges = result.data.allContentfulPost.edges;
			edges.forEach(({ node }) => {
				createPage({
					path: node.slug,
					component: path.resolve(`src/templates/blog-post.js`),
					context: {
						slug: node.slug
					}
				});
			})
			resolve();
		})
	})
}