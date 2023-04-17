import {useContext} from 'react';
// import Dialog from "@/components/Dialog/Dialog";
import Popup from "@/components/Popup/Popup";
import FoodItem from "@/components/FoodItem/FoodItem";
import FoodsContext from "@/components/context/Foods.context";

const FilterSearchFoods = (props: {
  searchValue: string,
  visible: boolean,
  cancel?: () => void
}) => {
  const {foods} = useContext(FoodsContext);
  const list = props.searchValue ?
    foods.filter(food => food.title.includes((props.searchValue))).map(food => <FoodItem {...food}></FoodItem>)
    : [];
  const popupConfig = {
    ...props,
    round: false,
    position: "bottom",
    height: 'calc(100% - 53px)'
  }
  return (<div>
    <Popup {...popupConfig}>
      {list}
    </Popup>
  </div>);
};

export default FilterSearchFoods;
