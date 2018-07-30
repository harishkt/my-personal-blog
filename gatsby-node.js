const path = require('path');

const createCategoryPages = (createPage, edges) => {
	edges.forEach(({ node }) => { 
		const categoryTitle = node.category[0].title;
		console.log(`categoryTitle in createCategopages is ${categoryTitle}`)
		createPage({
			path: `/category/${categoryTitle}`,
			component: path.resolve(`src/templates/category-template.js`),
			context: {
				title: categoryTitle
			}
		})
	});
};
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allContentfulPost(limit: 1000) {
					edges {
					  node {
						  category {
							  title
						  }
						  id
						  slug
					  }
					}
				}
			}
		`).then(result => {
			const edges = result.data.allContentfulPost.edges;
			createCategoryPages(createPage, edges);
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