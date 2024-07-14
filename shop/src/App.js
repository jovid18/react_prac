import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Details';
import axios from 'axios';
function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate('/detail');
                            }}
                        >
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
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
                            <button
                                onClick={() => {
                                    axios
                                        .get('https://codingapple1.github.io/shop/data2.json')
                                        .then((result) => {
                                            console.log(result.data);
                                            shoes = [...shoes, ...result.data];
                                            setShoes(shoes);
                                        })
                                        .catch(() => {
                                            console.log('실패했어요');
                                        });
                                }}
                            >
                                버튼
                            </button>
                        </>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/about" element={<About />} />
                <Route path="/event" element={<EventPage />}>
                    <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
                    <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
                </Route>
            </Routes>
        </div>
    );
}
function About() {
    return (
        <div>
            <h4>회사 정보</h4>
        </div>
    );
}
function EventPage() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
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
