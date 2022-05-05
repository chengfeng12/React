import { connect } from "react-redux";
// 引入 UI 组件
import CountUi from "../../components/Count";
// 引入 action 的方法
import {
  incrementCountAction,
  decrementCountAction,
  asyncIncrementCountAction
} from "../../redux/count_action"

export default connect(
  // mapStateToProps 映射状态
  state=> ({count: state}),
  // mapDispatchToProps 一般用法
  /* dispatch => {
    return {
      increment: number => dispatch(incrementCountAction(number)),
      decrement: number => dispatch(decrementCountAction(number)),
      asyncIncrement: (number, time) => dispatch(asyncIncrementCountAction(number, time)),
    }
  } */

  // 简写 react-redux 会自动调用 dispatch 分发 action
  {
    increment: incrementCountAction,
    decrement: decrementCountAction,
    asyncIncrement: asyncIncrementCountAction,
  }
)(CountUi);