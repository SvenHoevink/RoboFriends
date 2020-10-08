import react, { Fragment } from 'react';
import Card from './Card';
import CardDeck from './CardDeck';

const app = () => {
	return (
		<Fragment className="tc">
			<h1>Robofriends</h1>
			<CardDeck />
		</Fragment>
	);
};

export default app;
