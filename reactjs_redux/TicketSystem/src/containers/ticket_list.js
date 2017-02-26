import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ticket from '../components/ticket';
import Org from '../components/org';
import Submitter from '../components/user';
import Assignee from '../components/user';

class TicketList extends Component{

	renderTicket(ticketArrayData){
		let output = ticketArrayData.map((ticketData) => {
			
			return (
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	    	 		<div key={ticketData.ticket._id} className="thumbnail caption container">
							
						<Ticket data={ticketData.ticket} />
						<Submitter data={ticketData.submitter} type="Submitter"/>
						<Assignee data={ticketData.assignee} type="Assignee"/>
						<Org data={ticketData.org} />
							
					</div>
	    	 </div>
			);

		});

	    return output; 
	}

	render(){
		return (

			    <div className="container">
			      <div className="row">
					
			        {this.props.ticket.map(this.renderTicket)}
			       
			      </div>
			    </div>
		);
	}
}

function mapStateToProps({ticket}){
	return {ticket};
}

export default connect(mapStateToProps)(TicketList);