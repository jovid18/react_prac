import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';

function App() {
    let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="main-bg"></div>
            <div>
                <Container>
                    <Row>
                        {shoes.map((a, i) => {
                            return <Card shoes={shoes[i]} i={i}></Card>;
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <Col sm={4}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </Col>
    );
}

export default App;
