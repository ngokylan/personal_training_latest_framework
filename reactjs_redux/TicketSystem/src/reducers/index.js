import { combineReducers } from 'redux';
import TicketReducer from './reducer_ticket';

const rootReducer = combineReducers({
  ticket: TicketReducer
});

export default rootReducer;
