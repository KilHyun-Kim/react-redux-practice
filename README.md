# react-redux 순서

## redux로 Counter 제작

> ### 1. 관리할 액션 타입을 정의한다.
>
> ```
>  #modules/counter.js
>    const INCREASE = "counter/INCREASE";
>    const DECREASE = "counter/DECREASE";
> ```

> ### 2. 액션 생성 함수를 만들고 export로 내보내 준다.
>
> ```
>   export const increase = () => ({ type: INCREASE });
>   export const decrease = () => ({ type: DECREASE });
> ```

> ### 3. 초기 상태(initialState), 리듀서(reducer) 함수 만들기
>
> ```
> 초기상태 설정
> const initialState = {
>  number: 0,
> };
> ```
>
> ```
> 리듀서 함수
> function counter(state = initialState, action) {
>   switch (action.type) {
>    case INCREASE:
>      return {
>        number: state.number + 1,
>      };
>    case DECREASE:
>      return {
>        number: state.number - 1,
>      };
>    default:
>      return state;
>   }
> }
> // combineReducers({counter}) 를 내보내준다
> export default combineReducers({ counter });
> ```

> ### 4. 리액트 애플리케이션에 리덕스 적용하기
>
> #### 스토어를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업은 src/index.js 에서 이루어진다.
>
> ```
>  #src/index.js
>
> // 스토어 만들기
> import { createStore } from "redux";
> // counter.js 리듀서 갖고오기
> import conterReducer from "./modules/counter";
> //Provider 생성
> import { Provider } from "react-redux";
> // 스토어 생성
> const store = createStore(conterReducer, composeWithDevTools());
> // <Provider>로 <App /> 감싸주기
>  ReactDOM.render(
>  <Provider store={store}>
>    <App />
>  </Provider>,
>  document.getElementById("root")
> );
> ```

> ### 5. 컨테이너 컴포넌트 만들기
>
> #### 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아 오고,또 액션도 디스패치해 줄 차례

> ```
>  #/constainers/CounterContainer
>
> // connect 를 불러옴
> import { connect } from "react-redux";
> // Presentation Component
> import Counter from "../components/Counter";
> // 액션 생성 함수(store에 정의한) 불러옴
> import { increase, decrease } from "../modules/counter";
> // Presentation Component 에 props로 전달, return 값
> const CounterContainer = ({ number, increase, decrease}) => {
>   return (
>    <Counter
>      number={number}
>      color={color}
>      onIncrease={increase}
>      onDecrease={decrease}
>    />
> );
> };
> // connect함수는 Provider 컴포넌트 하위에 존재하는 컴포넌트들이 Store에 접근하게 만드는 역할을 해준다.
> export default connect(
> // mapStateToProps
>   (state) => ({
> number: state.counter.number,
> }),
> //mapDispatchToProps
> {
> increase,
> decrease,
> }
> )(CounterContainer);
>
> ```

> ### 6. Presentation Component
>
> ```
>  #/components/Counter.js
>   // 오로지 /constainers/CounterContainer 의 prosp를 받아서 보여주기만 하는 component이다.
>   const Counter = ({ number, onIncrease, onDecrease, color }) => {
>  return (
>    <div>
>      <h1>{number}</h1>
>      <div>
>        <button onClick={onIncrease}>+1</button>
>        <button onClick={onDecrease}>-1</button>
>      </div>
>    </div>
>  );
> };
> export default Counter;
> ```

> ### 7. 최종적으로 App.js 설정
>
> ```
>  #App.js
>   // containers/CounterContainer 호출
>  import CounterContainer from "./containers/CounterContainer";
> function App() {
>  return (
>    <div>
>      <CounterContainer />
>    </div>
>  );
> }
> export default App;
> ```
