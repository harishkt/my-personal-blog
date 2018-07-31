import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Article from '../components/article';

export default ({ data }) => {
	const { date, category, title, body } = data.contentfulPost;
	return(
		<Layout>
			<Article
				header={title.title}
				body={body}
				categoryList={category}
				postedDate={date}
			/>
		</Layout>
	)
}

export const query = graphql`
 query ($slug: String!) {
	contentfulPost(slug: {eq: $slug }) {
		category {
			id
			title
		}
		date(formatString: "DD MMMM, YYYY")
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