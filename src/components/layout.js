import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { css } from 'react-emotion';

import Header from './header';
import Footer from './footer';

const contentSection = css({
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
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div
					className={contentSection}
				>
					{children}
				</div>
				<Footer />
			</div>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.func,
}

export default Layout
