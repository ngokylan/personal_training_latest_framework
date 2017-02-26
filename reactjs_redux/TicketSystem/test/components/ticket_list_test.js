import { renderComponent, expect } from '../test_helper';
import TicketList from '../../src/components/ticket';

describe('TicketList', () => {
  let component;

  beforeEach(() => {
    const props = { tickets: ['A Catastrophe in Korea', 'A Problem in French Guiana'] };
    component = renderComponent(TicketList, null, props);
  });

  it('shows an LI for each ticket', () => {
    expect(component.find('.thumbnail').length).to.equal(2);
  });

  it('shows each ticket that is provided', () => {
    expect(component).to.contain('A Catastrophe in Korea');
    expect(component).to.contain('A Problem in French Guiana');
  });
});
