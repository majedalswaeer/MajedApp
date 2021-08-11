/* eslint-disable array-callback-return */
import React from "react";

import Header from "./components/Header";

import Main from "./components/Main";

import Footer from "./components/Footer";

import HornedData from "./components/HornedData.json";

import SelectedModal from "./components/SelectedModal";


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false,
      newData: {},
    }
  }
  
  
  showModal = async (title) => {
    let selectedimg = HornedData.find((element) => {
      if (element.title === title) {
        return element;
      }
    });

    await this.setState({
      newData: selectedimg,
      show: true,
    })


  }


  handleClose = () => {
    this.setState({
      newData: {},
      show: false,
    })

  }


  render() {
    return (
      <>

        <Header />
        <Main showModal={this.showModal} />
        <SelectedModal
        show={this.state.show}
        handleClose={this.handleClose}
        newData={this.state.newData}
        />
        <Footer />

      </>
    )
  }
}

export default App;
