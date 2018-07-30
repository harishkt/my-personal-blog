import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';

export default ({ data }) => {
	const { date, category, title, body } = data.contentfulPost;
	console.log(`body is ${JSON.stringify(body)}`);
	return(
		<Layout>
			<div>
				<h1>{title.title}</h1>
				<div key= {body.id} dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
				<ul style={{listStyle: 'none', display: 'block'}}>
					{category.map(({ title }) =>
						<Link to={`/category/${title}`} exact = {true} >
							<li style={{display: 'inline-block', boxSizing: 'content-box'}}>
								{title}
							</li>
						</Link>
					)}
				</ul>
				<p style={{fontSize: '90%'}}>Posted on {date}</p> 
			</div>
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