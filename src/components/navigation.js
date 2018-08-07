import React, { Component } from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { menu } from 'react-icons-kit/icomoon/menu';
import { cross } from 'react-icons-kit/icomoon/cross';
import { home } from 'react-icons-kit/icomoon/home';
import { books } from 'react-icons-kit/icomoon/books'
import { ic_code } from 'react-icons-kit/md/ic_code';
import { fileDirectory } from 'react-icons-kit/oct/fileDirectory';
import { project } from 'react-icons-kit/iconic/project';
import { person } from 'react-icons-kit/iconic/person';
import { Icon } from 'react-icons-kit';

const NavContainer = styled("div")`
	margin-top: 15px;
	float: left;
	display: block;
	justify-content: center;
	width: 15%;
`;
const ButtonStyle = styled("button")`
	border-radius: 50px;
	border-bottom-style:double;
	padding-top: 2px;
	margin-top: 10px;
	margin-right: 10px;
	border: none;
	background-color: 
	:hover {
		
		
	}
`
const NavigationList = styled("ul")`
	width: 100%;
	margin: 0 auto;
	margin-top: 30px;
	list-style: none;
	display: block;
	margin-right: '20px';
`;

const NavigationItem = styled("li")`
	padding: 0;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 0 auto;
	text-align: center;
	justify-content: center;
	vertical-align: middle;
	box-sizing: 'border-box';
	font-size: 100%;
	height: 100%;
	text-decoration-line: none;
	text-size-adjust: 100%;
	&:hover {
		background-color: #fff8ff;
		font-size: 120%;
		text-decoration: none;
		text-decoration-line: none;

	}
`;

export default class Navigation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: false
		}
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		const { isToggleOn } = this.state;
		const showButtonContents = isToggleOn ?
			<Icon size={24} color="choclate" icon={cross}/>
			: <Icon size={36} icon={menu}/>;
		return(
			<NavContainer>
				<ButtonStyle onClick={this.handleToggle}>
					{showButtonContents}
				</ButtonStyle>
				{
					isToggleOn === true &&
					<NavigationList>
						<NavigationItem>
							<Link
								to="/"
								style={{
									textDecoration: 'none',
								}}
							>
							<Icon size={36} icon={ home } />
							</Link>
						</NavigationItem>
						<NavigationItem>
							<Link
								to="/category"
								style={{
									textDecoration: 'none',
								}}
							>
								<Icon size={36} icon={ fileDirectory } />
							</Link>
						</NavigationItem>
						<NavigationItem>
							<Link
								to="/book-shelf"
								style={{
									textDecoration: 'none',
								}}
							>
								<Icon size={36} icon={ books } />
							</Link>
						</NavigationItem>
						<NavigationItem>
							<Link
								to="/code"
								style={{
									textDecoration: 'none',
								}}
							>
								<Icon size={36} icon={ ic_code } />
							</Link>
						</NavigationItem>
						<NavigationItem>
							<Link
								to="/projects"
								style={{
									textDecoration: 'none',
								}}
							>
							<Icon size={36} icon={ project } />
							</Link>
						</NavigationItem>
						<NavigationItem>
							<Link
								to="/about"
								style={{
									textDecoration: 'none',
								}}
							>
							<Icon size={36} icon={ person } />
							</Link>
						</NavigationItem>
					</NavigationList>
				}
				
			</NavContainer>	
		);
	}
}