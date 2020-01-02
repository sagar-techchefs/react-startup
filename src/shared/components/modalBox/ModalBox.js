import React from "react";
import "./modalBox.css";

class ModalBox extends React.Component {
	render() {
		return (
			<div
				className={
					this.props.show
						? "modal display-block"
						: "modal display-none"
				}
			>
				<section className="modal-main">
					{this.props.children}
					{this.props.handleClose ? (
						<button onClick={this.props.handleClose}>
							close
						</button>
					) : null}
				</section>
			</div>
		);
	}
}

export default ModalBox;
