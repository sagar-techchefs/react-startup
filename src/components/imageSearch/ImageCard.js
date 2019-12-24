import React from "react"

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = { spans: 0 }
    }

    render() {
        const { urls, description } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img src={urls.regular} alt={description} ref={this.imageRef} />

            </div>
        )
    }

    componentDidMount() {
        // console.log(this.imageRef);
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        // console.log("setSpans fun", this.imageRef);
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 150);
        this.setState({ spans: spans })
    }
}

export default ImageCard