import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MenuItem = ({ icon: Icon, label, address }) => {
  return (
    <NavLink to={address} className="flex items-center justify-center gap-2 mt-4 bg-black text-white py-2">
      <Icon className="w-5 h-5" />
      <span className="font-bold ">{label}</span>
    </NavLink>
  );
};
MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.elementType,
};
export default MenuItem;
