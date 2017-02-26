import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCTZ29A2qvogr8WSdnhjrrCKtIAXtrJdZE';


//create this component. this should generate html
//some HTML
class App extends Component{
	constructor(props){
		super(props);

		//init state as empty
		this.state = {
			videos: [],
			selectedVideo: null
		};

		//initial search
		this.videoSearch('surfboards');

	}

	videoSearch(term){
		//fetch new youtube data and update the state
		YTSearch({key: API_KEY, term: term}, (videos) => {
			console.log(videos);
			// this.setState({videos: videos});
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

//take this components generate HTML and put on the page
ReactDOM.render(<App />, document.querySelector('.container'));

