import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import { capitalize } from '../utils/other-utils';

const ArticleHeader = styled('div')`
	margin: 0 auto;
	font-size: 200%;
	text-align: center;
	vertical-align: middle;
	margin-bottom: 20px;
	font-style: bold;
`;

const ArticleBody = styled('div')`

`;

const Categories = styled('ul')`
	list-style: none;
	display: block;
	height: 40px;
`;

const Category = styled('li')`
	padding: 0;
	margin: 0 auto;
	text-align: center;
	justify-content: center;
	background-color: #212931;
	display: inline-block;
	vertical-align: middle;
	box-sizing: 'border-box';
	font-size: 100%;
	width: 15%;
	height: 100%;
	text-decoration-line: none;
	text-size-adjust: 100%;
	color: #212931;;
`;

const PostedDate = styled('p')`
	font-size: 90%;
	font-style: italic;
`;


export default ({ header, body, categoryList, postedDate }) => {
	return(
		<Fragment>
			<ArticleHeader>{header}</ArticleHeader>
			<ArticleBody key= {body.id} dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
			<Categories>
				{categoryList.map(({ title }, index) =>
					<Category key={index}>
						<Link to={`/category/${title}`} exact = {true} style={{color: 'white'}}>
							{capitalize(title)}
						</Link>
					</Category>
				)}
			</Categories>
			<PostedDate>Posted on {postedDate}</PostedDate> 
		</Fragment>
	)
}
