import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default ({ data }) => {
	console.log(JSON.stringify(data) + 'data in cate template');
	return(<Layout>
		<h1>fkjnsdkfn</h1>
	</Layout>);
}

export const query = graphql`
query ($title: String!) {
	contentfulCategory(title: { eq: $title }) {
		id,
		post {
		  slug
		  body {
			childMarkdownRemark {
			  excerpt
			}
		  }
		}
	}
 }
`