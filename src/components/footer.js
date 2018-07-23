import React from 'react';
import { css } from 'react-emotion';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GitHubIcon from 'react-icons/lib/fa/github';
import { Link } from 'gatsby';

const footerModule = css({
	margin: '0 auto',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem 0.5rem',
	maxWidth: '450px'
});

const links = {
	git: `https://github.com/harishkt`,
	twitter: `https://twitter.com/harish_tungatur`
}
const ExternalLink = ({ children, type }) => {
	const goTo = links[type];
	return(
		<Link target="_blank" rel="noopener" onClick={() => window.open(goTo)}>
			{children}
		</Link>
	);
}


export default () => (
	<footer className={footerModule}>
		<div style={{flexDirection: "row"}}>
			<ExternalLink type='twitter'>
				<TwitterIcon size={32} />
			</ExternalLink>
			<ExternalLink type='git'>
				<GitHubIcon size={32} />
			</ExternalLink>
		</div>
		
	</footer>
)