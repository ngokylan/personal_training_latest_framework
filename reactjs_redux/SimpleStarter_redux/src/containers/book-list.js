import React, { Component } from 'react';
import { connect } from 'react-redux';//is a glue between React and Redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';//make sure action float values to different interfaces of application

class BookList extends Component {
	renderList(){
		return this.props.books.map((book) =>{
			return (
				<li 
				 	key={book.title} 
				 	onClick={() => this.props.selectBook(book)}
				 	className="list-group-item">{book.title}</li>
			);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

//purpose is to take application state into arguments
function mapStateToProps(state){
	//watever is returned will show up as props
	//inside of BookList
	return {
		books: state.books
	};
	//in BookList class, the return will be replaced this.props
}

//Anythng returned from this function will be end up as this.props
// on the BookList container
function mapDispatchToProps(dispatch){
	//whenere selectBook is called, the result should be passed
	//to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

//connect function, promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available 
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);