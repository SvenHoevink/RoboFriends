import React, { Fragment } from 'react';
import Card from './Card';

const CardDeck = ({robots}) =>{
		return (
			<Fragment>
				<div className='tc'>
				{robots.map((value, i) => {
					return(
						<Card key= {i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
					)
				})}
				</div>
			</Fragment>
		);
};

export default CardDeck;
