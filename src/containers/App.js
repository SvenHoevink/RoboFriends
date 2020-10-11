import React, {Component} from 'react';
import CardDeck from '../components/CardDeck';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

class app extends Component{
	constructor() {
		super();
		this.state = {
			robots: [],
			Searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
	.then(users => this.setState({robots: users}));
}

	onSearchChange = (event) => {
this.setState({Searchfield: event.target.value})
	}

	render(){
		const {robots, Searchfield} = this.state;
		const filteredRobot = robots.filter(robot => { return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
		})

		if (robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className= 'tc'>
				<h1 className='f1'>Robofriends</h1>
			
				<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
				<CardDeck robots={filteredRobot}/>
				</Scroll>
				</div>
		);
		}
	};
};

export default app;
