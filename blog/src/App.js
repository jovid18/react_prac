import './App.css';
import { useState } from 'react';

function App() {
    let [글제목, 글제목변경] = useState(['spring', 'summer', 'fall', 'winter']);
    let [따봉, 따봉변경] = useState(0);

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
            <div className="list">
                <h4>
                    {글제목[0]}
                    <span onClick={() => 따봉변경(따봉 + 1)}>👍</span> {따봉}
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{글제목[3]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
