
import { useRef, useState } from "react";
//DiaryEditVer2 React에서 DOM조작 -useRef
//저장 버튼을 클릭했을 때 작성자와 입력값이 정상적으로 입력확인하고 아니면 focus반환
//From Udemy 이정환 "한입 크기로 잘라 먹는 리액트" 공부 텍스트
//alert는 ux경험에 해당하지 않아서 요즘은 지양하는 편이다
//이를 위해 focus를 활용 (DOM요소를 활용하기 위해서 useRef씀)

const DiaryEditVer2 = () => {
    const authorInput = useRef();
    const textareaInput = useRef();
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
        if(state.author.length < 1){
            
            authorInput.current.focus(); //포커스 가게 만드는 명령어
            return;
        }
        if(state.content.length<5){
            textareaInput.current.focus(); //포커스 (유스레프로 커런트)
            return;
        }
        alert("저장 성공");
    };
    //객체 펼치기 spead 용법으로 일일이 다 쓰지 않아도 된다 content: state.content를
    // ...state, author: e.target.value로 스프레드를 맨 위로
    //둬야 순서상으로 맞음 (위에서 아래로 읽는 속성 때문)
    return <div className="DiaryEdit">
        <h2>Name</h2>
        <div>
            <input value={state.author} ref={authorInput} onChange={handleChangeState} placeholder="Name" name="author"/>
        </div>
        <div>
            <textarea name="content" ref={textareaInput} value={state.content} onChange={handleChangeState} />
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
export default DiaryEditVer2;