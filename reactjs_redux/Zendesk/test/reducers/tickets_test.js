import { expect } from '../test_helper';
import ticketReducer from '../../src/reducers/reducer_ticket';
import { FETCH_TICKET } from '../../src/actions/index';

describe('Tickets Reducer', () => {
  it('handles action with unknown type', () => {
    expect(ticketReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type FETCH_TICKET', () => {
    const action = { type: FETCH_TICKET, data: Object };
    expect(ticketReducer([], action)).to.eql([Object]);
  });
});
