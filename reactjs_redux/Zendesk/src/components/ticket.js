import React from "react";
import moment from 'moment';
import Tag from './tag';

export default (props) => {
	//ticket info
	let output = "";
	if(props.data != undefined){
		const ticketid = props.data._id;
		const subject = props.data.subject;
		const description = props.data.description;
		const type = props.data.type;
		const status = props.data.status;
		let priority = props.data.priority;
		let header_label = "";
		let priority_class = "";
		if(status == "solved" || status == "closed"){
			header_label = "bs-calltoaction bs-calltoaction-default";
			priority_class = "label label-default";
		}else{
			if(priority == "urgent"){
				header_label = "bs-calltoaction bs-calltoaction-danger";
				priority_class = "label label-danger";
			}else if(priority == "high"){
				header_label = "bs-calltoaction bs-calltoaction-warning";
				priority_class = "label label-warning";
			}else if(priority == "normal"){
				header_label = "bs-calltoaction bs-calltoaction-primary";
				priority_class = "label label-primary";
			}else if(priority == "low"){
				header_label = "bs-calltoaction bs-calltoaction-default";
				priority_class = "label label-default";
			}
		}
		
		let created_at = props.data.created_at;
		console.log(created_at);
		let tempt = created_at.split(' ');
		created_at = moment(tempt[0]);
		created_at = created_at.format('DD/MM/YYYY hh:mm a');
		
		let due_at = props.data.due_at;
		let tempt2 = "";
		if(due_at != undefined){
			tempt2 = due_at.split(' ');
			due_at = moment(tempt2[0]);
			due_at = due_at.format('DD/MM/YYYY hh:mm a');
		}else{
			due_at = "(Empty)";
		}
		

		let tags = props.data.tags;
		tags = tags.map((tag) => {
			return (
				<span>
					<Tag tag={tag}/>
				</span>
			);
		});
		console.log(tags);

		const has_incidents = props.data.has_incidents;
		const via = props.data.via;
		const external_id = props.data.external_id;
		const url = props.data.url;

		output = (
			<div className="row hr">
                <div className={"col-md-12 " + header_label}>
                	<div className="row">
                		<div className="col-md-10">
                			<h5>{props.data.subject} </h5>
                		</div>
                		<div className="col-md-2">
		                	<span className={priority_class}>{props.data.status}</span>
		                </div>
                	</div>
                </div>
                <div className="col-lg-12">
                	<p><span>Created at:<i className="fa fa-calendar"></i> {created_at} </span> <br/>
               				<span>Due at: <i className="fa fa-calendar"></i> {due_at} </span> <br />
               				<span>Priority: <span className={priority_class}> {props.data.priority}</span></span>
               				</p>
                    <p>{props.data.description}</p>
                </div>
                <div className="col-lg-12">
                    <p>{tags}</p>
                </div>
			</div>
		);

	}else{
		output = (
			<div className="hr">
				(Empty)
			</div>
		);
	}

	return output;
}