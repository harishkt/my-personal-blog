import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled, { css } from 'react-emotion';
import ArticleSummary from '../components/article-summary';
import { capitalize } from '../utils/other-utils';
import Img from 'gatsby-image';

const CategoryHeading = styled('div')`
	margin: 0 auto;
	font-size: 200%;
	text-align: center;
	vertical-align: middle;
	display: block;
`;
const ArticlesContainer = styled('div')`
	display: block;
	justify-content: center;
	flex-direction: column;
	margin-top: 20px;
`;
const outerImageWrap = css`
	display: inline-block;
`;

export default (({ data, pageContext }) => {
	const categoryNeeded = pageContext.title;
	const edges = data.allContentfulPost.edges;
	const postsByCategory = edges.filter(edge => edge.node.category[0].title === categoryNeeded);
	const logo = postsByCategory[0].node.category[0].icon || null;
	let iconLogo = null;
	if (logo) {
		iconLogo = <Img fluid={logo.fluid}
			alt={"Logo"}
			fadeIn={true}
			outerWrapperClassName={outerImageWrap}
			style={{ width: '40px', height: '40px'}}
		/>
	}
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
				<div style ={{display: 'inline-block'}}> {capitalize(categoryNeeded)} posts </div>
				{iconLogo}
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

