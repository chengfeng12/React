import Counter from "../Counter/Counter";
import {FoodItemType} from '../Foods.type'
import './foodItem.css'
export default function FoodItem(props: FoodItemType) {
  return (
    <div className="foods-item">
      <div className="image">
        <img src={props.imgUrl} alt={props.title} />
      </div>
      <div className="main">
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
        <div className="price">
          <span className="price-count">{props.price}</span>
          <Counter {...props}></Counter>
        </div>
      </div>
    </div>
  );
}
