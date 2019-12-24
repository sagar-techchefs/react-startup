import React from "react"

import Spinner from "../../shared/components/Spinner"

import SeasonDisplay from "./SeasonDisplay"

class Seasons extends React.Component {
    state = { latitude: null, errorMessage: null };

    /*     constructor(props) {
            super(props);
    
    
            // console.info("Contructor called");
        } */

    // avoid logic in render function 
    render() {
        // console.info("render called");

        return (
            <div>
                {/* <h2>Sesions</h2> */}
                {/* {this.state.latitude ? (<h3>Latitude {this.state.latitude}</h3>) : null} */}

                {this.renderContent()}
            </div>
        )
    }

    renderContent() {
        return (
            this.state.latitude ?
                (<SeasonDisplay latitude={this.state.latitude} />)
                :
                this.state.errorMessage ? (<h3>Error Message: {this.state.errorMessage}</h3>)
                    : <Spinner message="Location required, accept it" />
        )
    }

    // React life cycles
    componentDidMount() {
        // console.info("componentDidMount called");
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // console.log(position)
                this.setState({ latitude: position.coords.latitude });
            },
            err => {
                // console.info(err);
                this.setState({ errorMessage: err.message })
            }
        );
    }

    /* 
        componentDidUpdate() {
            console.info("componentDidUpdate called");
        }
    
        componentWillUnmount() {
            console.info("componentWillUnmount called");
        }
    
        shouldComponentUpdate() {
            console.info("shouldComponentUpdate called");
            // avoid component from update or not
            return true;
            return false;
        }
    
        static getDerivedStateFromProps() {
            console.info("getDerivedStateFromProps called");
            return null;
        }
    
        getSnapshotBeforeUpdate() {
            console.info("getSnapshotBeforeUpdate called");
            return null;
        } */

}

export default Seasons;