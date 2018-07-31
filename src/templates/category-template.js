import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import ArticleSummary from '../components/article-summary';
import { capitalize } from '../utils/other-utils';

const CategoryHeading = styled('div')`
	margin: 0 auto;
	font-size: 200%;
	text-align: center;
	vertical-align: middle;
`;
const ArticlesContainer = styled('div')`
	display: block;
	justify-content: center;
	flex-direction: column;
	margin-top: 20px;
`;

export default (({ data, pageContext }) => {
	const categoryNeeded = pageContext.title;
	const edges = data.allContentfulPost.edges;
	const postsByCategory = edges.filter(edge => edge.node.category[0].title === categoryNeeded);
	const articleList = postsByCategory.map(({ node }, index) => (
			<ArticleSummary
				id={node.body.id}
				key={index}
				path={`/${node.slug}`}
				title={node.title.title}
				excerpt={node.body.childMarkdownRemark.excerpt}
			/>
		)
	);
	return(
		<Layout>
			<CategoryHeading>
				{capitalize(categoryNeeded)} posts
			</CategoryHeading>
			<ArticlesContainer>{articleList}</ArticlesContainer>
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

