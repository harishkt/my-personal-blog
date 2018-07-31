import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'react-emotion';

import Header from './header';
import Footer from './footer';

const ContentSection = styled('div')({
	margin: '0 auto',
	maxWidth: 960,
	padding: '0px 1.0875rem 1.45rem',
	paddingTop: 0,
})
const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Personal Bloh' },
						{ name: 'keywords', content: 'learning, javascript, nodejs, react' },
					]}
				/>
				<Header siteTitle={data.site.siteMetadata.title} />
				<ContentSection>
					{children} 
				</ContentSection>
				<Footer />
			</div>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
