import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions";

import SongDetails from "./SongDetails";

class SongsList extends React.Component {
	renderList() {
		return this.props.songsList.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		// console.log(this.props);
		return (
			<div className="ui container grid">
				<div className="ui row">
					<div className="column eight wide">
						<div className="ui divided list">
							{this.renderList()}
						</div>
					</div>
					<div className="column eight wide">
						<SongDetails />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state);
	// return state
	return { songsList: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongsList);
