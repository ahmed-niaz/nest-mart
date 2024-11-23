import MenuItem from "./MenuItem";
import { UserCog } from "lucide-react";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={UserCog} label="Manage Users" address="manage-users" />
    </>
  );
};

export default AdminMenu;
