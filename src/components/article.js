import React from 'react';
import { Link } from 'gatsby';

export default ({ header, body, categoryList, postedDate }) => {
	return(
		<div>
			<h1>{header}</h1>
			<div key= {body.id} dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
			<ul style={{listStyle: 'none', display: 'block'}}>
				{categoryList.map(({ title }) =>
					<Link to={`/category/${title}`} exact = {true} >
						<li style={{display: 'inline-block', boxSizing: 'content-box'}}>
							{title}
						</li>
					</Link>
				)}
			</ul>
			<p style={{fontSize: '90%'}}>Posted on {postedDate}</p> 
		</div>
	)
}
