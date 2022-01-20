import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ diaryList }) => {
    console.log(diaryList);
    return (
        <div className="DiaryLst">
            <h2>리스트 목록</h2>
            <h4>{diaryList.length}개의 리스트가 있습니다</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it}/>
                    // <div key={it.id}>
                    //     {/* 자식들은 유니크한 식별자를 지녀야 함
                    //     warning: Each child in a list should have a unique "key" prop
                    //     고유 id를 활용하거나 idx(map인자로 받음)를 써도 되나 수정할 때 문제가 생길 수 있음*/}
                    //     <div>작성자:{ it.author}</div>
                    //     <div>일기:{ it.content}</div>
                    //     <div>감정:{ it.emotion}</div>
                    //     <div>작성시간:{ it.created_date}</div>
                    // </div>
                ))}
            </div>
        </div>
    );
};
export default DiaryList;