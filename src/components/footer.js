import React from 'react';
import styled, { css } from 'react-emotion';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GitHubIcon from 'react-icons/lib/fa/github';
import Contentful from '../images/logos/contentful-logo.png';
import Netlify from '../images/logos/netlify-logo.png'
import Gatsby from '../images/logos/gatsby-logo.png'


const ExternalSources = styled('div')({
	margin: '0 auto',
	display: 'block',
	justifyContent: 'center',
	textAlign: 'center',
	alignItems: 'center',
	padding: '1rem 0.5rem',
	maxWidth: '450px'
});

const Image = styled("img")`
	width: 30px;
	height: 30px;
	margin-right: 10px;
`
const PoweredBy = styled("div")`
	float: right;
	display: flex;
	flex-direction: row;
`
const links = {
	git: `https://github.com/harishkt`,
	twitter: `https://twitter.com/harish_tungatur`,
	netlify: `https://www.netlify.com/`,
	contentful: `https://www.contentful.com/`,
	gatsby: `https://www.gatsbyjs.org/`
}
const ExternalLink = ({ children, type }) => {
	const goTo = links[type];
	return(
		<a href={goTo} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
}

export default () => (
	<footer>
		<ExternalSources>
			<ExternalLink type='twitter'>
				<TwitterIcon size={40} color='cadetblue'/>
			</ExternalLink>
			<ExternalLink type='git'>
				<GitHubIcon size={40} color='choclate'/>
			</ExternalLink>
		</ExternalSources>
		<PoweredBy>
			<span style={{fontSize: '60%', marginRight: '10px'}}>Powered By</span>
			<ExternalLink type='gatsby'>
				<Image src={Gatsby}/>
			</ExternalLink>
			<ExternalLink type='netlify'>
				<Image src={Netlify}/>
			</ExternalLink>
			<ExternalLink type='contentful'>
				<Image src={Contentful}/>
			</ExternalLink>
		</PoweredBy>
		
	</footer>
)