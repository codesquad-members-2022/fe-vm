import NavItem from "./NavItem/NavItem";

const Menus = ({ data }) => {
  return data.map((item) => <NavItem menuItem={item} key={item.id} />);
};

const Navbar = ({ menusData }) => {
  return <Menus data={menusData} />;
};

export default Navbar;
