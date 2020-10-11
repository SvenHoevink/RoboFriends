import React, { Component, Fragment } from 'react';
import CardDeck from './CardDeck';
import robots from './Robots';
import SearchBox from './SearchBox'
import './App.css'

class app extends Component{
	render(){
		return (
			<Fragment className="tc">
				<h1>Robofriends</h1>
				<SearchBox />
				<CardDeck robots={robots}/>
			</Fragment>
		);
	};
};

export default app;
