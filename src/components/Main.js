import React from 'react';

import HornedBeasts from './HornedBeasts';

import HornedData from './HornedData.json';

import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

    render() {
        return (
            <div>
                {HornedData.map((item,idx) => {
                    return (
                        <HornedBeasts
                            key={idx}
                            src={item.image_url}
                            title={item.title}
                            alt={item.alt}
                            description={item.description}
                            keyword={item.keyword}
                            horns={item.horns}
                            showModal={this.props.showModal}
                        />   
                        )
                    })}
            </div>

        )
    }
}

export default Main;
