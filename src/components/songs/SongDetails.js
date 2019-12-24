import React from "react"
import { connect } from "react-redux"

class SongDetails extends React.Component {

    render() {
        const song = this.props.song
        if (!song) {
            return <div>Select a song</div>
        }
        const { title, duration } = this.props.song;
        return (
            <div>
                <h1>Selected song details: </h1>
                <p>Title: {title}</p>
                <p>Duration: {duration}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);