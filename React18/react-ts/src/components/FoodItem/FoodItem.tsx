import Counter from "../Counter/Counter";
import {FoodItemType} from '../Foods.type'
import './foodItem.css'

interface PropsTypes extends FoodItemType {
  type?: string,
}

export default function FoodItem(props: PropsTypes) {
  const {type, ...data} = props
  return (
    <div className={`foods-item foods-item-${type}`}>
      <div className="image">
        <img src={props.imgUrl} alt={props.title}/>
      </div>
      <div className="main">
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
        <div className="price">
          <span className="price-count">{props.price}</span>
          <Counter {...data}></Counter>
        </div>
      </div>
    </div>
  );
}
