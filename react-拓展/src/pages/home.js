
import { renderRoutes } from "react-router-config" 
export default function Home(props) {
  let { route } = props;
  return (
    <div className="home">
      home
      {renderRoutes(route.routes)}
    </div> 
  )
}