import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
	const edges = data.allContentfulPost.edges;
	const nodes = edges.map(({ node }) => {
		const { title } = node.title;
		const { id } = node.body;
		const  { excerpt } = node.body.childMarkdownRemark;
		return(
			<div key={id}>
				<Link
					to={node.slug}
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
