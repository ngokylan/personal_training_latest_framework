import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import TicketList from '../containers/ticket_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<div className="row">
      		<span className="pull-left"><img className="logo" src="https://d1eipm3vz40hy0.cloudfront.net/images/part-header/zendesk-relationshapes-logo.svg" /></span>
      	</div>
      	<br />
      	<div className="row">
      		<SearchBar />
      		<br />
      		<TicketList />
      	</div>
      </div>
    );
  }
}
