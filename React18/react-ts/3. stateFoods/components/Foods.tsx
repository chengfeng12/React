import {useState, useRef, useEffect} from "react";
import autoAnimate from '@formkit/auto-animate'
import FoodsContext from "./context/Foods.context";
import FoodItem from "./FoodItem/FoodItem";
import {FoodItemType, FoodContextType} from "./Foods.type";
import FilterSearch from "./FilterSearch/FilterSearch";
import {FoodList} from './Foods.style'
import Footer from "@/components/Footer/Footer";

const FOODS_LIST: FoodItemType[] = [
  {
    id: 1,
    imgUrl: require("@/assets/images/1.png"),
    title: "小米",
    content:
      "小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机",
    price: 18,
    count: 0,
  },
  {
    id: 2,
    imgUrl: require("@/assets/images/1.png"),
    title: "小米12",
    content:
      "小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机",
    price: 30,
    count: 0,
  },
  {
    id: 3,
    imgUrl: require("@/assets/images/1.png"),
    title: "小米8",
    content:
      "小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机",
    price: 35,
    count: 0,
  },
  {
    id: 4,
    imgUrl: require("@/assets/images/1.png"),
    title: "苹果",
    content:
      "小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机小米手机",
    price: 22,
    count: 0,
  },
  {
    id: 5,
    imgUrl: require("@/assets/images/1.png"),
    title: "苹果12",
    content:
      "苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机",
    price: 60,
    count: 0,
  },
  {
    id: 6,
    imgUrl: require("@/assets/images/1.png"),
    title: "苹果11",
    content:
      "苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机",
    price: 55,
    count: 0,
  },
  {
    id: 7,
    imgUrl: require("@/assets/images/1.png"),
    title: "苹果X",
    content:
      "苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机",
    price: 55,
    count: 0,
  },
  {
    id: 8,
    imgUrl: require("@/assets/images/1.png"),
    title: "苹果8",
    content:
      "苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机苹果手机",
    price: 65,
    count: 0,
  },
];
export type initCartType = Pick<FoodContextType, "totalCount" | "totalPrice" | "cartList">
export const initCart: initCartType = {
  totalCount: 0,
  totalPrice: 0,
  cartList: [],
}
export default function Foods() {
  const [foodList, setFoodList] = useState(FOODS_LIST);
  const [cartInfo, setCartinfo] = useState<initCartType>({
    ...initCart
  });
  const foodsRef = useRef(null)
  useEffect(() => {
    foodsRef.current && autoAnimate(foodsRef.current)
  }, [foodsRef])
  const addFood = (item: FoodItemType) => {
    setCount('add', item)
  };
  const removeFood = (item: FoodItemType) => {
    setCount('subtract', item)
  };
  const setCount = (type: string, item: FoodItemType) => {
    let index = null;
    const newList = foodList.map((food, i) => {
      if (item.id === food.id) {
        index = i
        let tempFood = {...food};
        if (type === 'add') {
          tempFood.count = food.count + 1
        } else {
          tempFood.count = food.count - 1
        }
        return tempFood
      }
      return food
    })

    cartInfo.cartList = newList.filter(food => food.count);
    // if (index !== null) {
    //   const cartIndex = cartInfo.cartList.findIndex(food => food.id === item.id)
    //   if (cartIndex >= 0) {
    //     cartInfo.cartList[cartIndex] = newList[index]
    //   } else {
    //     cartInfo.cartList.push(newList[index])
    //   }
    // }
    if (type === 'add') {
      setCartinfo(pre => {
        console.log(pre, 'pre')
        return {
          ...pre,
          totalCount: pre.totalCount + 1,
          totalPrice: pre.totalPrice + item.price
        }
      })
    } else {
      setCartinfo(pre => {
        return {
          ...pre,
          cartList: cartInfo.cartList,
          totalCount: (pre.totalCount - 1) || 0,
          totalPrice: (pre.totalPrice - item.price) || 0
        }
      })
    }
    setFoodList(newList)
  }
  const clearFood = () => {
    setFoodList(FOODS_LIST)
  }
  const clearCartinfo = () => {
    setCartinfo(pre => {
      return {
        ...pre,
        ...initCart,
        cartList: []
      }
    })
    clearFood();
  }
  const list = foodList.map((item: FoodItemType) => (
    <FoodItem {...item} key={item.id}></FoodItem>
  ));

  return (
    <FoodsContext.Provider
      value={{
        ...cartInfo,
        addFood,
        removeFood,
        foods: foodList
      }}
    >
      <FilterSearch></FilterSearch>
      <FoodList ref={foodsRef}>
        {list}
      </FoodList>
      <Footer clearCartinfo={clearCartinfo}></Footer>
    </FoodsContext.Provider>
  );
}
