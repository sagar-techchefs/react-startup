import React from "react"
import "./imageList.css"
import ImageCard from "./ImageCard"

class ImageList extends React.Component {

    render() {
        const imageComponent = this.props.images.map((image) => <ImageCard key={image.id} image={image} />)
        // const imageComponent = this.props.images.map(({ urls, description, id }, i) => <img key={id} src={urls.regular} alt={description} />)
        // const imageComponent = this.props.images.map((imageObj, i) => <img src={imageObj.urls.regular} alt={imageObj.description} />)
        return <div className="image-list">{imageComponent}</div>
    }
}

export default ImageList;