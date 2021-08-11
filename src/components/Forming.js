import React from "react";
import { Form, FloatingLabel } from "react-bootstrap/";


class Forming extends React.Component {
    render() {
        return (
            <>
                <Form onChange={this.props.filterByHorn}>
                    <FloatingLabel controlId="floatingSelect" label="Select your fav number of horns">
                        <Form.Select placeholder="Open this select menu" aria-label="Default select example">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">What about 100 ?</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form>
            </>
        )
    }
}


export default Forming;
