import React, { Component, Fragment } from 'react';
import Card from './Card';
import tachyons from 'tachyons'

const CardDeck = ({robots}) =>{
		return (
			<Fragment className='tc'>
				<div>
				{robots.map((value, i) => {
					return(
						<Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
					)
				})}
				</div>
			</Fragment>
		);
};

export default CardDeck;
