import { NavLink } from "react-router-dom";

function Link(props) {
  return <NavLink className="navLink" {...props}></NavLink>;
}

function MyLink(props) {
  let { navList } = props;
  let list = []
  return (
    <>
      123
      {
        navList.forEach((nav) => {
          if (nav.routes && nav.routes.length) {
            MyLink(nav.routes)
          } else {
            list.push(<Link {...nav}></Link>)
          }
        })
        
      }
      {
        console.log(list, 'list')
      }
    </>
  );
}

export default MyLink;
