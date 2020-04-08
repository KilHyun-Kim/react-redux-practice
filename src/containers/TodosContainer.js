import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    ></Todos>
  );
};
export default connect(
  // 비구조화 할당을  통해 todos를 분리하여
  // state.todos.input 대신 todos.input 을 사용
  (state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }),
  /* 위와 동일
   (state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }), 
  */
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
  // 이전에 todos 모듈에서 작성했던 액션 생성 함수와 상태 안에 있떤 값을
  // 컴포넌트의 props로 전달 해준다.
)(TodosContainer);
