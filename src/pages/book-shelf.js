import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';



export default ({ data }) => {
	const { goodreadsShelf: { reviews } } = data;
	const BookContainer = ({ link, title, imageUrl }) => {
		return(
			<div style={{display: 'flex', flexWrap: 'wrap'}}>
				<div style={{width: '20%'}}>
						<a href={link} target="_blank" rel="noopener noreferrer">
							<img src={imageUrl} alt={title}/>
						</a>
					</div>
					<div style={{width: '80%'}}>
						<a href={link} target="_blank" rel="noopener noreferrer">
							<h3>{title}</h3>
						</a>
					</div>
			</div>
		);
	}
	const BookList = () => reviews.map(({ book }) =>
		<li key={book.bookID} style={{borderBottom: '4px dotted black'}}>
			<BookContainer
				link={book.link}
				title={book.title}
				imageUrl={book.imageUrl}
			/>
		</li>
	);
	return (
		<Layout>
			<h4> Book Shelf </h4>
			<ul style={{listStyle: 'none'}}>
				<BookList />
			</ul>
		</Layout>
	);
}

export const query = graphql`
	query goodRead {
		goodreadsShelf {
			id
			reviews {
				reviewID
				book {
					bookID
					link
					title
					imageUrl
				}
			}
		}
	}
`;