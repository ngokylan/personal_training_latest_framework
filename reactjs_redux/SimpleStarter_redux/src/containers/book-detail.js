import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
	render(){
		//application state like below is different and separate from Component State
		//this.state.lasdfds
		//this.setState({lasefe: 'lafe'});

		if(!this.props.book){
			return <div>Select a book to get started.</div>
		}
		return (
			<div>
				<h3>Details for : </h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);