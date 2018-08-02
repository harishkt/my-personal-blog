const path = require('path');

const createCategoryPages = (createPage, edges) => {
	edges.forEach(({ node }) => { 
		const categoryTitle = node.category[0].title;
		createPage({
			path: `/category/${categoryTitle}`,
			component: path.resolve(`src/templates/category-template.js`),
			context: {
				title: categoryTitle
			}
		})
	});
};
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
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
	`);
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
	});
}