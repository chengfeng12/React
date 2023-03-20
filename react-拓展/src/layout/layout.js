import { renderRoutes } from 'react-router-config'
import MyLink from "../components/Navlink";

export default function Layout(props) {
  let { route } = props;
  console.log(route, 'route');
  const getNav = () => {
    return route.routes;
  }
  // getNav()
  return (
    <div className="Layout">
      <MyLink navList={route.routes}></MyLink>
      {renderRoutes(route.routes)}
    </div> 
  )
}