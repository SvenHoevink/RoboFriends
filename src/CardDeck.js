import React, { Component, Fragment } from 'react';
import Card from './Card';
import tachyons from 'tachyons'

const CardDeck = ({robots}) =>{
		return (
			<Fragment className='tc'>
				{robots.map((value, i) => {
					return(
						<Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
					)
				})}
			</Fragment>
		);
};

export default CardDeck;
