import { useEffect, useState } from 'react';
import MenuList from '../components/MenuList';
import menuData from '../data/menu.json';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  return (
    <div className="bg-light py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">Thực đơn của chúng tôi</h1>
        <MenuList menuItems={menuItems} />
      </div>
    </div>
  );
}

export default Menu;