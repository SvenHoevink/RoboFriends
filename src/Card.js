import React, { Fragment } from 'react';
import 'tachyons';

const Card = ({ name, id, email }) => {
	return (
		<Fragment>
			<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
				<img alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Card;
