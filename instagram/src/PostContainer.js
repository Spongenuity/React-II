import React, {Component} from 'react';
import './PostContainer.css'
import {postData} from './application-data';
import {CommentSection} from './CommentSection';
import Heart from 'react-icons/lib/io/android-favorite';
import Comment from 'react-icons/lib/io/chatbubble';
import Moment from 'react-moment';


export default class PostContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Posts: []
		};

	}

	componentDidMount() {
		this.setState({Posts: postData, comments: this.props.postData.comments});
	}



	render() {
	return (
		<div>
		{console.log(postData.comments)}
		{this.props.postData.map((post => {
			return(
				<div key={post.timestamp} className="Container">
					<div className="Container-Header">
						<div className="Header-Elements">
							<img className="Image-Thumb" src={post.thumbnailUrl} alt='thumbnail'/>
							<span className="Username">{post.username}</span>
						</div>
					</div>
					<img className="Image-Main" src={post.imageUrl} alt='main'/>
					<div className="Icon-Container">
						<div className="Icon-Elements">
							<a><Heart /></a>
							<a><Comment /></a>
						</div>
					</div>
					<div className="Like-Container">
						<div className="Icon-Elements">
							<span className="Likes">{post.likes} likes</span>
						</div>
					</div>
					<CommentSection date={postData} comments={post.comments}/>
					<section>
						<div className="Time-Container">
							<span className="Time"><Moment parse="MMMM Do YYYY, hh:mm:ss A" fromNow>{post.timestamp}</Moment></span>
						</div>
					</section>
					<section>
						<div className="Add-Comment-Container">
						<input className="Add-Comment" placeholder="Add a comment..."/>
						</div>
					</section>
				</div>
				)
		}))}

		</div>
		)
	}

}


