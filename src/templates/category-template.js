import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import ArticleSummary from '../components/article-summary';

export default (({ data, pageContext }) => {
	const categoryNeeded = pageContext.title;
	const edges = data.allContentfulPost.edges;
	const postsByCategory = edges.filter(edge => edge.node.category[0].title === categoryNeeded);
	const articleList = postsByCategory.map(({ node }) => (
			<ArticleSummary
				key={node.body.id}
				path={`/${node.slug}`}
				title={node.title.title}
				excerpt={node.body.childMarkdownRemark.excerpt}
			/>
		)
	);
	return(
		<Layout>
			<h1>{categoryNeeded}</h1>
			{articleList}
		</Layout>
	);
})

export const query = graphql`
	query {
		allContentfulPost {
			edges {
				node {
					category {
						id
						title
					}
					slug
					title {
						title
					}
					body {
						childMarkdownRemark {
							excerpt
						}
					}
				}
			}
		}
	}
`;

