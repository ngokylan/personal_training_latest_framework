//state argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action){
	//EX:  state += 1, every time action is trigger state is increased 

	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;

		//do not do like this
		//state.title = book.title
		//return state
	}
	return state
}