import React from 'react';
import Tag from './tag';

export default (props) => {
	//org info
	let output = "";
	if(props.data != undefined){
		const org_name = props.data.name;
		const org_created_at = props.data.created_at;
		const org_details = props.data.details;
		const org_shared_tickets = props.data.shared_tickets;
		const org_tags = props.data.tags;
		const org_url = props.data.url;

		let domain_names = props.data.domain_names;
		domain_names = domain_names.map((domain) => {
			return (
				<span> 
					<Tag tag={domain}/>
				</span>
			);
		});

		output = (
			<div className="row">
				<div className="col-lg-12">
                    <p>Organization Name: <span className="">{org_name} ({org_details})</span></p>
               		<p>{domain_names}</p>
                </div>
			</div>
		);
	}else{
		output = (
			<div>
				(Empty)
			</div>
		);
	}

	return (
		<div className="col-md-12 hr">
			{output}
		</div>
	);
}