//From Udemy 이정환 "한입 크기로 잘라 먹는 리액트"
import { useState } from "react";

const DiaryEdit = () => {
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 5
    });
    const handleChangeState = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
    };
    const handleSubmit = () => {
        console.log(state);
        alert("저장 성공");
    };
    //객체 펼치기 spead 용법으로 일일이 다 쓰지 않아도 된다 content: state.content를
    // ...state, author: e.target.value로 스프레드를 맨 위로
    //둬야 순서상으로 맞음 (위에서 아래로 읽는 속성 때문)
    return <div className="DiaryEdit">
        <h2>Name</h2>
        <div>
            <input value={state.author} onChange={handleChangeState} placeholder="Name" name="author"/>
        </div>
        <div>
            <textarea name="content" value={state.content} onChange={handleChangeState} />
        </div>
        <div>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
    </div>;
};
export default DiaryEdit;