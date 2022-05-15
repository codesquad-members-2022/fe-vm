import NavItem from "./NavItem/NavItem";

const Navbar = ({ menusData }) => {
  return (
    <>
      {menusData.map((item) => (
        <NavItem menuItem={item} key={item.id} />
      ))}
    </>
  );
};

export default Navbar;
