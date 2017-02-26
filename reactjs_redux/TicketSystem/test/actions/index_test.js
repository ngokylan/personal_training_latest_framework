import { expect } from '../test_helper';
import { FETCH_TICKET } from '../../src/actions/index';
import { searchTicket } from '../../src/actions';

describe('actions', () => {
  describe('searchTicket', () => {
    it('has the correct type', () => {
      const action = searchTicket();
      expect(action.type).to.equal(FETCH_TICKET);
    });

    it('has the correct data', () => {
      const action = searchTicket('Drama');
      expect(action.data).to.equal(Object);
    });
  });
});
