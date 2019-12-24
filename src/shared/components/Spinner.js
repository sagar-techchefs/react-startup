import React from "react"

const Spinner = (props) => {
    return (
        <div>
            <div className="ui active transition visible dimmer">
                <div className="content"><div className="ui massive text loader">{props.message}</div></div>
            </div>
            <img alt="loader"
                src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                className="ui image"
            />
            <img alt="loader"
                src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                className="ui image"
            />
            <img alt="loader"
                src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                className="ui image"
            />
        </div>
    )
}

Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;