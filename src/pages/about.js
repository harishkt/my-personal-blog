import React from 'react';
import { css } from 'react-emotion';

import Layout from '../components/layout';

const mainSection = css({
	maxWidth: '50%'
})
const aboutSection = css({
	display: 'flex',
	flexWrap: 'wrap'
});
const skillsSection = css({
	maxWidth: '50%',
	paddingLeft: '40px',
	marginLeft: '30px'
});
export default () => (
	<Layout>
		<div className={aboutSection}>
			<section className={mainSection}>
				<h1>ABOUT</h1>
				<p> Hello I'm Harish, Software Engineer. I intend to use this blog 
					as a tracking tool for my learning process.
				</p>
			</section>
			<aside className={skillsSection}>
				<h1>Skills</h1>
				<ul style={{listStyle: 'none'}}>
					<li>Languages: JavaScript, Java, Ruby & Scala</li>
					<li>Frameworks: React, Gatsby</li>
					<li>Run time Environments: Nodejs</li>
				</ul>
			</aside>
		</div>
	</Layout>
)
