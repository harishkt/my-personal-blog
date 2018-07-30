import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';

export default (({ data, pathContext }) => {
	const categoryNeeded = pathContext.title;
	const edges = data.allContentfulPost.edges;
	const postsByCategory = edges.filter(edge => edge.node.category[0].title === categoryNeeded);
	const nodes = postsByCategory.map(({ node }) => {
		const { title } = node.title;
		const { id } = node.body;
		const  { excerpt } = node.body.childMarkdownRemark;
		return(
			<div key={id}>
				<Link
					to={`/${node.slug}`} exact = {true}
				>
					<h3>{title}</h3>
				</Link>
				<div>{excerpt}</div>
			</div>
		)
	})
	return(
		<Layout>
			{nodes}
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
						childMarkdownRemark {
							html
						}
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

