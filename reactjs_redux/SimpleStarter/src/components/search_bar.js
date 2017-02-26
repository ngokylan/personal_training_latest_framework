// import React from 'react';
import React, {Component} from 'react';

// class SearchBar extends React.Component{
class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: 'test'};
		//this.onInputChange = this.onInputChange.bind(this);
	}

	render(){
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
				{/*Value of the input: {this.state.term} */}
			</div>
		);
	}

	onInputChange(term){
		// this.state.term = event.target.value // BADD!!!!
		console.log(term);
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;//SearchBar has to = import Searchbar from index.js