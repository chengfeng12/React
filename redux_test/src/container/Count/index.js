import { connect } from "react-redux";
// 引入 UI 组件
import CountUi from "../../components/Count";
// 引入 action 的方法
import {
  incrementCountAction,
  decrementCountAction,
  asyncIncrementCountAction
} from "../../redux/count_action"

const mapStateToProps = store => ({count: store})

const mapDispatchToProps = dispatch => {
  return {
    increment: number => {
      console.log(number, "number");
      incrementCountAction(number)
    },
    decrement: number => decrementCountAction(number),
    asyncIncrement: (number, time) => asyncIncrementCountAction(number, time),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUi);