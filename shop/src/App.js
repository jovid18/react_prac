import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';
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
            <Link to="/">홈페이지</Link>
            <Link to="/detail">상세페이지</Link>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
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
                        </>
                    }
                />
                <Route path="/detail" element={<div>상세페이지임</div>} />
            </Routes>
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
