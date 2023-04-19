import {useState, useRef, useEffect} from "react";
import autoAnimate from '@formkit/auto-animate'
import FoodsContext from "./context/Foods.context";
import FoodItem from "./FoodItem/FoodItem";
import {FoodItemType, FoodContextType} from "./Foods.type";
import FilterSearch from "./FilterSearch/FilterSearch";
import {FoodList} from './Foods.style'

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
export default function Foods() {
  const [foodList, setFoodList] = useState(FOODS_LIST);
  const [cartInfo, setCartinfo] = useState<Pick<FoodContextType, "totalCount" | "totalPrice" | "cartList">>({
    totalCount: 0,
    totalPrice: 0,
    cartList: [],
  });
  const foodsRef = useRef(null)
  useEffect(() => {
    foodsRef.current && autoAnimate(foodsRef.current)
  }, [foodsRef])
  const addFood = (item: FoodItemType) => {
    setCount('add', item)
    // console.log(item, "add");
    // let newCartData = {
    //   ...cartInfo
    // };
    // newCartData.cartList.push(item);
    // setCartinfo(newCartData)
  };
  const removeFood = (item: FoodItemType) => {
    setCount('subtract', item)
  };
  const setCount = (type: string, item: FoodItemType) => {
    const newList = foodList.map(food => {
      if (item.id === food.id) {
        return {
          ...food,
          count: type === 'add' ? food.count + 1 : food.count - 1
        }
      }
      return food
    })
    setFoodList(newList)
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
    </FoodsContext.Provider>
  );
}
