import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
// import { useEffect, useState } from "react";
function Menu() {
  const menu = useLoaderData();
  /// OLD WAY
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   async function fetchMenu() {
  //     const menu = await getMenu();
  //     console.log(menu);
  //     setMenu(menu);
  //   }
  //   fetchMenu();
  // }, []);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
