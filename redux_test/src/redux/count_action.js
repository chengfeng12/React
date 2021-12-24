// 引入常量
import { INCREMENT, DECREMENT} from './constant';
/* 
	该文件专门为Count组件生成action对象
*/
export const incrementCountAction = data => ({type: INCREMENT, data})
export const decrementCountAction = data => ({type: DECREMENT, data})