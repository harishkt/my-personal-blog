import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { capitalize } from '../utils/other-utils';

export default () => {
	return(
		<Layout>Work in Progress</Layout>
	)
}

export const query = graphql`
	query {
		allContentfulPost {
			edges {
				node {
					category {
						icon {
							fluid {
								src
								srcSet
								aspectRatio
								sizes
							}
							fixed {
								width
								height
								base64
								src
								srcSet
							}
						}
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