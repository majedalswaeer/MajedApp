import React from 'react';

import './HornedBeasts.css';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.src} alt={this.props.alt} title={this.props.title} ></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;