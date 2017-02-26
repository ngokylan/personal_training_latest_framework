import { FETCH_TICKET } from '../actions/index';

export default function(state = [], action){
	console.log('Action received', action);

	switch(action.type){
		case FETCH_TICKET:

		return [action.data];
	}

	return state;
}