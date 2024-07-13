import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['spring', 'summer', 'fall']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

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
                onClick={() => {
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
          </div>
        );
      })}
      {modal === true ? <Modal 글제목={글제목} title={title} /> : null}
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

export default App;
