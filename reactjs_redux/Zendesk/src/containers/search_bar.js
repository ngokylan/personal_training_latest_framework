import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTicket} from '../actions/index';

class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();

		//we need to search through ticket data

		//reset the search textbox state
		this.props.fetchTicket(this.state.term);
		this.setState({term: ''});
	}

	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					id="txtSearch"
					placeholder="Search for the support ticket"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button id="btnSearch" className="btn btn-secondary" type="submit">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchTicket}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);