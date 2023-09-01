import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickRet } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((compTodo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{compTodo}</li>
              <button onClick={() => onClickRet(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
