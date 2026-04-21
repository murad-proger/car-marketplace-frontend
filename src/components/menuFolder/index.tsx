import { MenuItem } from "./MenuItem";

interface MenuProps {
  onClick?: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onClick }) => {
  return (
    <ul className="menu" onClick={onClick}>
      <MenuItem path={'/favourites'}>Избранные</MenuItem>
      <MenuItem path={'/catalog'}>Каталог</MenuItem>
      <MenuItem path={'/orders'}>Мои заказы</MenuItem>
      <MenuItem path={'/cart'}>Корзина</MenuItem>
    </ul>
  );
};
