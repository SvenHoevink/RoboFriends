import React, { Component} from 'react';
import CardDeck from './CardDeck';
import SearchBox from './SearchBox'
import './App.css'
import robots from './Robots'

class app extends Component{
	constructor() {
		super();
		this.state = {
			robots: robots,
			Searchfield: ''
		}
	}

	onSearchChange = (event) => {

		const filteredRobot = this.state.robots.filter(robots => { return
			robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase()); 
			console.log(filteredRobot);
		})
	}

	render(){
		return (
				<div className= 'tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardDeck robots={this.state.robots}/>
				</div>
		);
	};
};

export default app;
