export interface FoodItemType {
  id: number,
  imgUrl: string,
  title: string,
  content: string,
  price: number,
  count: number
}

export interface FoodContextType {
  totalCount: number,
  totalPrice: number,
  cartList: FoodItemType[],
  foods: FoodItemType[],
  addFood: (item: FoodItemType) => void,
  removeFood: (item: FoodItemType) => void
}
