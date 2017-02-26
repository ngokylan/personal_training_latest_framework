import React from 'react';

export default (props) => {
	//submitter info
	let output = "";
	if(props.data != undefined){
		const name = props.data.name;
		const alias = props.data.alias;
		const role = props.data.role;
		const active = props.data.active;
		const locale = props.data.locale;
		const timezone = props.data.timezone;
		const email = props.data.email;
		const phone = props.data.phone;
		const tags = props.data.tags;
		const suspended = props.data.suspended;

		output = (
			<div className="row">
				<div className="col-lg-12">
                    <p>{props.type}: <span className="">{name} ({role})</span> <span><i className="fa fa-mobile"></i> {phone} </span></p>
                </div>
			</div>
		);
	}else{
		return (
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