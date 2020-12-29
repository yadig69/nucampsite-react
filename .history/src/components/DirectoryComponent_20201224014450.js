/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const directory = this.state.campsites.map(campsite => {
            return (
                <div key={ campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;