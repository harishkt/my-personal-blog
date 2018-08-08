import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';

import { capitalize } from '../utils/other-utils';

const CategoryListContainer = styled('div')`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
`;

const CategoryContainer = styled('div')`
	margin-left: 20px;
	margin-right: 20px;
	width: 100%;
	:hover {
		
		font-size: 110%;
	}
`;
const ImageClassName = css({
	width: '300px',
	height: '300px',
	webkitTransform: `translate3d(0,0,0)`
});

export default ({ data }) => {
	const { edges } = data.allContentfulCategory;
	const categoriesList = edges.map(({ node, index }) => {
		const { fluid } = node.icon;
		const { title } = node;
		const { excerpt } = node.shortDescription.childMarkdownRemark;
		return(
			<Link to={`category/${title}`}>
				<CategoryContainer key={index}>
				<h3>{capitalize(title)}</h3>
				<Img fluid={fluid}
					alt={"Logo"}
					fadeIn={true}
					className={ImageClassName}
				/>
				<p>{excerpt}</p>
				</CategoryContainer>
			</Link>
		);
	})
	return(
		<Layout>
			<CategoryListContainer>
				{categoriesList}
			</CategoryListContainer>	
		
		</Layout>
	)
}

export const query = graphql`
	query {
		allContentfulCategory {
		edges {
			node {
				title
				icon {
					fluid {
						src
						srcSet
						aspectRatio
						sizes
					}
				}
				id
				title
				post {
					id
				}
				shortDescription {
					id
					childMarkdownRemark {
						excerpt
						html
					}
				}
			}
		}
	}
}
`;