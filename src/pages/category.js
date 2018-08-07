import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import styled from 'react-emotion';
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
		width: 120%;
		font-size: 120%;
	}
`;

export default ({ data }) => {
	const { edges } = data.allContentfulCategory;
	const categoriesList = edges.map(({ node, index }) => {
		const { fluid } = node.icon;
		const { title } = node;
		const { excerpt } = node.shortDescription.childMarkdownRemark;
		// style={{ width: '40px', height: '40px'}}
		return(
			<Link to={`category/${title}`}>
				<CategoryContainer key={index}>
				<h3>{capitalize(title)}</h3>
				<Img fluid={fluid}
					alt={"Logo"}
					fadeIn={true}
					style={{ width: '300px', height: '300px'}}
				/>
				<p>{excerpt}</p>
				</CategoryContainer>
			</Link>
			
		)
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