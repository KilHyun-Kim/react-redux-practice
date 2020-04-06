import React from "react";
//  connect 를 불러옴
import { connect } from "react-redux";
import Counter from "../components/Counter";
// 액션 생성 함수 불러옴
import { increase, decrease, increase5 } from "../modules/counter";
// import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease, increase5 }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
      onIncrease5={increase5}
    />
  );
};
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
    increase5,
  }
)(CounterContainer);

/* 1. mapStateToProps, mapDispatchToProps를 미리 선언해놓고 사용하기
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    // 액션생성함수 사용
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

/* 2. connect 함수 내부에 익명 함수 형태로 선언하기
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  })
)(CounterContainer);
*/
