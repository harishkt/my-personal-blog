import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

import NavigationList from './navigation';


const TitleContainer = styled('div')`
	margin: 0 auto;
	width: 85%;
	padding: 1.45rem 1.0875rem;
	display: inline-block;
`;

const HeaderText = styled('h1')`
	margin: 0 auto;
	align-content: center;
`;

const Header = ({ siteTitle }) => (
	<Fragment>
		<NavigationList />
		<TitleContainer>
			<HeaderText>
				<Link
					to="/"
					style={{
						textDecoration: 'none',
					}}
				>
					{siteTitle}
				</Link>
				</HeaderText>
			</TitleContainer>
	</Fragment>
)

export default Header
