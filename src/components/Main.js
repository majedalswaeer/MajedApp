import React from "react";

import HornedBeasts from "./HornedBeasts";

import HornedData from "./HornedData.json";

import "bootstrap/dist/css/bootstrap.min.css";

import Forming from "./Forming.js";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterdData: HornedData,
        }
    }

    filterByHorn = (e) => {
        e.preventDefault();
        let selectedOption = Number(e.target.value);
        let newSelectedEl = [];
        if ((selectedOption!=-1)) {
            newSelectedEl = HornedData.filter((element) => {
                if (element.horns === selectedOption) {
                    return element;
                }
            });
            this.setState({
                filterdData: newSelectedEl,
            });
        } else {
            newSelectedEl = HornedData
        }
        this.setState({
            filterdData: newSelectedEl,
        });

    };

    render() {
        return (
            <div>
                <Forming filterByHorn={this.filterByHorn} />
                {this.state.filterdData.map((item, idx) => {
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
