# react-redux 순서

## redux로 Counter 제작

> ### 1. 관리할 액션 타입을 정의한다.
>
> ```
>  modules/counter.js
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
>
> ### 4. 리액트 애플리케이션에 리덕스 적용하기
>
> #### 스토어를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업은 src/index.js 에서 이루어진다.
>
> ```
>  src/index.js
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
