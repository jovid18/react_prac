import './App.css';
import { useState } from 'react';

function App() {
    let [글제목, 글제목변경] = useState(['spring', 'summer', 'fall']);
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: 'red', fontSize: '16px' }}>test blog </h4>
            </div>
            <button
                onClick={() => {
                    let copy = [...글제목];
                    copy.sort();
                    글제목변경(copy);
                }}
            >
                가나다순 정렬
            </button>
            <button
                onClick={() => {
                    let copy = [...글제목];
                    copy[0] = '봄';
                    글제목변경(copy);
                }}
            >
                버튼
            </button>
            {글제목.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4 onClick={() => setModal(!modal)}>{글제목[i]}</h4>
                        <span
                            onClick={() => {
                                let copy = [...따봉];
                                copy[i]++;
                                따봉변경(copy);
                            }}
                        >
                            👍
                        </span>
                        {따봉[i]}
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}
            {modal === true ? <Modal /> : null}
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
}

export default App;
