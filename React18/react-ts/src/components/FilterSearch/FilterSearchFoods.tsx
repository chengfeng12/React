import {useContext} from 'react';
// import Dialog from "@/components/Dialog/Dialog";
import Popup from "@/components/Popup/Popup";
import FoodItem from "@/components/FoodItem/FoodItem";
import FoodsContext from "@/components/context/Foods.context";
import {FoodItemType} from "@/components/Foods.type";

const FilterSearchFoods = (props: {
  searchValue: string,
  visible: boolean,
  cancel?: () => void
}) => {
  const {foods} = useContext(FoodsContext);
  const list = () => {
    const data = props.searchValue ? foods.filter(food => food.title.includes((props.searchValue))) : foods
    return data.map((food: FoodItemType) => <FoodItem type='reduce' key={food.id} {...food}></FoodItem>)
  };
  const popupConfig = {
    ...props,
    round: false,
    position: "bottom",
    height: 'calc(100% - 53px)'
  }
  return (<div>
    <Popup {...popupConfig}>
      {list()}
    </Popup>
  </div>);
};

export default FilterSearchFoods;
