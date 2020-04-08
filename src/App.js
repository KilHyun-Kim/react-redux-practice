import React from "react";
import TodosContainer from "./containers/TodosContainer";
// import CounterContainer from "./containers/CounterContainer";
import CCuseSelector from "./containers/CCuseSelector";
import TodosHooksContainer from "./containers/TodosHooksContainer";
export function App() {
  return (
    <div>
      <CCuseSelector />
      <hr />
      <TodosContainer />
      <hr />
      <TodosHooksContainer />
    </div>
  );
}

export default App;
