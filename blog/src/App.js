import './App.css';
import React, { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['spring', 'summer', 'fall']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

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
            <h4
              onClick={() => {
                setTitle(i);
                setModal(!modal);
              }}
            >
              {글제목[i]}

              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>
      {modal === true ? <Modal 글제목={글제목} title={title} /> : null}
      <Modal2 />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
