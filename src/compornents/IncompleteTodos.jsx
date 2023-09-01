import React from "react";

export const IncompleteTodes = (props) => {
  const { inCompText, onClick, onClickDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* mapは第2引数を指定するとその要素のindex番号を取れる!! */}
        {inCompText.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>完了</button>
              {/* ↓ここでアロー関数化しておかないと、読込と同時にonClickDelete(index)を実行してしまう */}
              <button onClick={() => onClickDel(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
