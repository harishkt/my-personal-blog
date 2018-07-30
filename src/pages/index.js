import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ArticleSummary from '../components/article-summary';

const IndexPage = ({ data }) => {
	const edges = data.allContentfulPost.edges;
	const articleList = edges.map(({ node }) => (
			<ArticleSummary
				key={node.body.id}
				path={node.slug}
				title={node.title.title}
				excerpt={node.body.childMarkdownRemark.excerpt}
			/>
	));
	return(
		<Layout>
			{articleList}
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
