import React from 'react';

import './HornedBeasts.css';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfPets: 0
        }
    }

    count = () => {
        this.setState({
            numberOfPets: this.state.numberOfPets + 1

        })

    }

    render() {
        return (
            <div className='cont'>
                <Card style={{ textAlign: 'center', fontSize:'3ch', margin :'15ch' , color:'white' } } className="mb-2" text={'red'} border='danger' bg='info'  >
                    <Card.Img onClick={this.count} variant="top" src={this.props.src} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button onClick={this.count} variant="primary">Vote for Your Fav Beast</Button>
                        <p>Votes = {this.state.numberOfPets}❤</p>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

export default HornedBeasts;

