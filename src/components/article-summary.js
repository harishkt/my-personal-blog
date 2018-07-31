import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

const ArticleSummary = styled('div')`
	margin-bottom: 20px;
	display: block;
	&:hover {
		background-color: #fff8ff;

	}
`;

const ArticleHeading = styled('h3')`
	font-size: 180%;
	margin-bottom: 10px;
	display: block;
`;
const ArticleExcerpt = styled('div')`
	font-style: italic;
`;

export default ({ id, path, title, excerpt }) => (
	<ArticleSummary id={id}>
		<Link
			to={path}
		>
		<ArticleHeading>{title}</ArticleHeading>
		</Link>
		<ArticleExcerpt>{excerpt}</ArticleExcerpt>
	</ArticleSummary>
)
