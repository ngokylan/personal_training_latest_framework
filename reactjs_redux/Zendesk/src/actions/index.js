import { organization_data } from '../data/organizations';
import { ticket_data } from '../data/tickets';
import { user_data } from '../data/users';

export const FETCH_TICKET = 'FETCH_TICKET';

function getAssociatedData(ticket){
	const organization_array = organization_data;
	const user_array = user_data;

	// console.log(organization_array);
	// console.log(user_array);
	//search for associated org
	const associated_organization = organization_array.filter(org => {
		return org._id === ticket.organization_id
	});

	//search for associated submitter user
	const associated_submitter = user_array.filter(user => {
		return user._id === ticket.submitter_id
	});

	//search for associated assignee user 
	const associated_assignee = user_array.filter(user => {
		return user._id === ticket.assignee_id
	});

	return {"ticket": ticket, "org": associated_organization[0], "submitter": associated_submitter[0], "assignee" : associated_assignee[0]};
}

export function fetchTicket(term){

	// //analize search term
	// let ticket_subject = "";
	// let ticket_description = "";
	// if(term.search(";") > -1){
	// 	term = term.split(";");

	// 	ticket_subject = term[0];
	// 	ticket_description = term[1];
	// }else{
	// 	ticket_subject = term;
	// }
	const ticket_array = ticket_data;
	
	//printout input json file
	//console.log(ticket_array);

	const result = ticket_array.reduce((prev, ticket) => {
		//console.log(ticket.subject.search(term));
		//if(ticket.subject.search(term) > -1){

			//console.log(ticket);

			// if(ticket_description != "" || ticket_subject != ""){
			// 	if(ticket.description.search(ticket_description) > -1){
			// 		prev.push({"ticket": ticket, "org": associated_organization[0], "submitter": associated_submitter[0], "assignee" : associated_assignee[0]});
			// 	}
			// 	if(ticket.subject.search(ticket_subject) > -1 || ticket.subject.search(ticket_description) > -1){
			// 		prev.push({"ticket": ticket, "org": associated_organization[0], "submitter": associated_submitter[0], "assignee" : associated_assignee[0]});
			// 	}
			// }else{
			// 	prev.push({"ticket": ticket, "org": associated_organization[0], "submitter": associated_submitter[0], "assignee" : associated_assignee[0]});
			// }
			// if(ticket.description.search(ticket_description) > -1){
			// 	prev.push({"ticket": ticket, "org": associated_organization[0], "submitter": associated_submitter[0], "assignee" : associated_assignee[0]});
		 // 	}

		 	for(var prop in ticket){
		 		//console.log(ticket[prop]);
	 			if(ticket[prop] instanceof Array){
	 				if(ticket[prop].length > 0){
	 					ticket[prop].forEach((entry) =>{
	 						if(entry.search(term) > -1){
	 							
	 							prev.push(getAssociatedData(ticket));
	 							return prev;
	 						}
	 					});
	 				}
	 			}else{
	 				let tempt = ticket[prop];
	 				if(typeof tempt == 'string'){
		 				if((tempt.trim()).search(term) > -1){//find matching in any fields
		 					prev.push(getAssociatedData(ticket));
		 					return prev;
		 				}
		 			}
	 			}
		 		
		 	}
		//}
		return prev;
	}, []);

	// const associated_organization = organization_array.filter(org => {
	// 	return org._id === result.organization_id
	// });

	// const associated_submitter_id = user_array.filter(user => {
	// 	return user._id === result.submitter_id
	// });

	// const associated_assignee_id = user_array.filter(user => {
	// 	return user._id === result.assignee_id
	// });

	//console.log(result);
	// console.log(associated_organization);
	// console.log(associated_submitter_id);
	// console.log(associated_assignee_id);

	return {
		type: FETCH_TICKET,
		data: result
	}
}