import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./compornents/InputTodo";
import { IncompleteTodes } from "./compornents/IncompleteTodos";
import { CompleteTodos } from "./compornents/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //入力欄の値が変更された時のイベント
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //追加ボタンクリック
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTasks = [...incompleteTodos, todoText];
    setIncompleteTodos(newTasks);
    setTodoText("");
  };
  //削除ボタンクリック
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice関数は第1引数に削除開始インデックス、第2引数に削除したい数を指定すると削除できる
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  //完了ボタンクリック
  const onClickComp = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    //完了のTODOに追加する
    const newComps = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newComps);
  };
  //戻すボタンクリック
  const onClickReturn = (index) => {
    const comps = [...completeTodos];
    comps.splice(index, 1);

    //完了のTODOに追加する
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(comps);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までだよ～。消化しましょう。
        </p>
      )}
      <IncompleteTodes
        inCompText={incompleteTodos}
        onClick={onClickComp}
        onClickDel={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickRet={onClickReturn} />
    </>
  );
};

export default App;
