import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    let [postTitles, b] = useState(['spring', 'summer', 'fall', 'winter']);
    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: 'red', fontSize: '16px' }}>test blog </h4>
            </div>
            {postTitles.map((postTitle) => (
                <div className="list" key={postTitle}>
                    <h4>{postTitle}</h4>
                    <p>2월 17일 발행</p>
                </div>
            ))}
        </div>
    );
}

export default App;
