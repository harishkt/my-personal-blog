import React from 'react';
import { Link } from 'gatsby';

export default ({ key, path, title, excerpt }) => (
	<div key={key}>
		<Link
			to={path}
		>
		<h3>{title}</h3>
		</Link>
		<div>{excerpt}</div>
	</div>
)
