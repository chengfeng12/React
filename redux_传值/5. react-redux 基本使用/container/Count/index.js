import { connect } from "react-redux";
// 引入 UI 组件
import CountUi from "../../components/Count";
// 引入 action 的方法
import {
  incrementCountAction,
  decrementCountAction,
  asyncIncrementCountAction
} from "../../redux/count_action"

const mapStateToProps = state => ({count: state})

const mapDispatchToProps = dispatch => {
  return {
    increment: number => dispatch(incrementCountAction(number)),
    decrement: number => dispatch(decrementCountAction(number)),
    asyncIncrement: (number, time) => dispatch(asyncIncrementCountAction(number, time)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUi);