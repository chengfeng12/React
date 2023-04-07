import { createContext } from 'react'
import { FoodContextType } from '../Foods.type'
const FoodsContext = createContext<FoodContextType>({
  totalCount: 0,
  totalPrice: 0,
  cartList: [],
  addFood: () => {},
  removeFood: () => {},
})

export default FoodsContext