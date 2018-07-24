import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default ({ data }) => {
	const { author, category, title, body } = data.contentfulPost;
	console.log(`body is ${JSON.stringify(body)}`);
	return(
		<Layout>
			<div>
				<h1>{title.title}</h1>
				<p>Category: {category[0].title}</p>
				<p>Author: {author[0].name}</p> 
				<div key= {body.id} dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
			</div>
		</Layout>
	)
}

export const query = graphql`
 query ($slug: String!) {
	contentfulPost(slug: {eq: $slug }) {
		author {
			name
		}
		category {
			id
			title
		}
		title {
			id
			title
		}
		body {
			childMarkdownRemark {
				html
			}
			id
		}
	}
 }
`