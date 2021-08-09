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
                {/* <img src={this.props.src} alt={this.props.alt} title={this.props.title} ></img>
                <p>{this.props.description}</p> */}
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

// constructor(props) {
//     super(props);
//     this.state = {
//         numberOfPets: 0
//     }
// }

// increaseNuOfPets = () => {
//     console.log(this);

//     this.setState({
//         numberOfPets: this.state.numberOfPets + 1
//     })
// }

// render() {
//     console.log()
//     return (
//         <>
//             {/* <p>{this.props.catName}</p>
//             <img onClick={this.increaseNuOfPets} src={this.props.catImage} alt='' />
//             <p>Number of Pets = {this.state.numberOfPets}</p> */}

//             <Card style={{ width: '18rem' }}>
//                 <Card.Img onClick={this.increaseNuOfPets} variant="top" src={this.props.catImage} />
//                 <Card.Body>
//                     <Card.Title>{this.props.catName}</Card.Title>
//                     <Card.Text>
//                         🐱 Number of Pets = {this.state.numberOfPets}
//                     </Card.Text>
//                     {/* <Button onClick={this.increaseNuOfPets} variant="primary">Click to pet my head</Button> */}
//                 </Card.Body>
//             </Card>

//         </>
//     )
// }
// }

// export default ChildCat;