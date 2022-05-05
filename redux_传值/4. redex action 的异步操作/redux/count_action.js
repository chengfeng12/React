// 引入常量
import { INCREMENT, DECREMENT } from './constant';
/* 
	该文件专门为Count组件生成action对象
*/

//同步action，就是指action的值为Object类型的一般对象
export const incrementCountAction = data => ({type: INCREMENT, data})
export const decrementCountAction = data => ({type: DECREMENT, data})

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。

/**
 * 当前版本并未生效 原因未知
 * 
 */
export const asyncIncrementCountAction = (data, time) => {
  return (dispatch) => {
    // 没有进来
		setTimeout(()=>{
      // 没有进来
			dispatch(incrementCountAction(data, time))
		}, time)
	}
}