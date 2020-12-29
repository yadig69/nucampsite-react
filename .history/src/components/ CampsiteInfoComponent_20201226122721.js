/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.campsite) {
            return <div className = "row"></div>
        } else {
            return <div></div>
        }
        
    }
}

export default CampsiteInfo