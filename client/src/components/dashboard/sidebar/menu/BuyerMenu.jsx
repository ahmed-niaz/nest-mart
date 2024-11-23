import { BaggageClaim, ListTodo } from "lucide-react";
import MenuItem from "./MenuItem";
const BuyerMenu = () => {
  return (
    <div>
      <MenuItem icon={ListTodo} label="WishList" address="wishlist" />
      <MenuItem icon={BaggageClaim} label="Cart" address="cart" />
    </div>
  );
};

export default BuyerMenu;
