import React from "react";
import {Modal,Card,Button} from "react-bootstrap/";
//___________________________________________________________


class SelectedModal extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.newData.title}</Modal.Title>
                        <Card.Img variant="top" src={this.props.newData.image_url} />
                    </Modal.Header>
                    <Modal.Body>{this.props.newData.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }



}
//___________________________________________________________

export default SelectedModal;