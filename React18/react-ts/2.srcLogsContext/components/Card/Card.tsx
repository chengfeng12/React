import {CardDiv} from './Card.style'
export default function Card(props: any) {
  return (
    <CardDiv>
      {props.children}
    </CardDiv>
  )
}
