import { Route, Routes } from "react-router-dom";
import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./detail";
import {useDispatch} from "react-redux";
import {createBucket, loadBucketFB, addBucketFB} from "./redux/modules/bucket"
import Progress from "./Progress";
// import {db} from "./firebase"


function App() {
  
  
  const text = React.useRef(null);
  
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(loadBucketFB());
  }, [])

  const addBucketList = () => {
    dispatch(addBucketFB({text: text.current.value, completed: false}));
    // dispatch(createBucket({text: text.current.value, completed: false}));
  };
  
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress/>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}

        <Routes>
          <Route path="/" element={<BucketList />} />
          <Route path="/detail:index" element={<Detail />} />
        </Routes>

      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      <button onClick={() => {
        window.scrollTo({top:0, left:0, behavior: "smooth"});
      }}>위로 가기</button>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  & > * {
    padding : 5px;
  }

  & input{
    border: 1px solid #888;
    width: 70%;
    margin-right: 10px;
  }

  & input:focus {
    border: 1px solid #a673ff;
    outline: none;
  }
  
  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background: #a673ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;