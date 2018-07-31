import React from 'react'
import { graphql } from 'gatsby'
import styled from 'react-emotion';
import Layout from '../components/layout'
import ArticleSummary from '../components/article-summary';

const ArticlesContainer = styled('div')`
	display: block;
	justify-content: center;
	flex-direction: column;
	margin-top: 20px;
`;
const IndexPage = ({ data }) => {
	const edges = data.allContentfulPost.edges;
	const ArticleList = () => edges.map(({ node }, index) => (
			<ArticleSummary
				id={node.body.id}
				key={index}
				path={node.slug}
				title={node.title.title}
				excerpt={node.body.childMarkdownRemark.excerpt}
			/>
	));
	return(
		<Layout>
			<ArticlesContainer>
				<ArticleList />
			</ArticlesContainer>
		</Layout>
	)
	
}

export const query = graphql`
	query {
		allContentfulPost(
			filter:{
				node_locale:{eq: "en-US"}},
				sort: {fields:[createdAt], order:DESC})
			{
			edges {
				node {
				title {
					title
					id
				}
				slug
				body {
					childMarkdownRemark {
						excerpt
					}
					id
				}
				}
			}
		}
	}
`
export default IndexPage
