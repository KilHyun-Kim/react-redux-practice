import { combineReducers } from "redux";

// 액션 타입을 정의하고 액션 생성 함수 만들기

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
/* 액션 생성 함수 : export 사용함으로써 
추후 이 함수를 다른 파일에서 불러와 사용 할 수 있다.*/

// 초기 상태 및 리듀서 함수 만들기

const initialState = {
  number: 0,
  color: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      console.log(state.color);
      return {
        number: state.number + 1,
        color: state.color + 1,
      };
    case DECREASE:
      console.log(state.color);
      return {
        number: state.number - 1,
        color: state.color,
      };

    default:
      return state;
  }
}

export default combineReducers({ counter });

/* 이 모듈의 초기 상태(initialState)에는 number 값을 설정해 주었으며,
리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성하여 반환하는
코드를 작성해 주었다.

액션 생성함수의 경우에는 export 로 내보냈고,
지금의 리듀서는 export default로 내보내 주었다.
이 둘의 차이는 , export는 여러개 내보낼 수 있지만,
export default는 온리 한개만 내보낼 수 있다*/
