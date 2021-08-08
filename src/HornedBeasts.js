import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.src} alt={this.props.alt} title={this.props.title} ></img>
            </div>
        )
    }
}

export default HornedBeasts;