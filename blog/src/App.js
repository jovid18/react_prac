import './App.css';
import { useState } from 'react';

function App() {
    let [postTitles, b] = useState(['spring', 'summer', 'fall', 'winter']);
    let [따봉, 따봉변경] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: 'red', fontSize: '16px' }}>test blog </h4>
            </div>
            <div className="list">
                <h4>
                    {postTitles[0]}
                    <span onClick={() => 따봉변경(따봉 + 1)}>👍</span> {따봉}
                </h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{postTitles[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{postTitles[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{postTitles[3]}</h4>
                <p>2월 17일 발행</p>
            </div>
        </div>
    );
}

export default App;
