import { ListPlus, PackagePlus } from "lucide-react";
import MenuItem from "./MenuItem";

const SellerMenu = () => {
  return (
    <>
      <MenuItem icon={PackagePlus} label="Add Product" address="add-product" />
      <MenuItem icon={ListPlus} label="My List" address="my-list" />
    </>
  );
};

export default SellerMenu;
