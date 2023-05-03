const Navbar = ({navValue}) => {
  return (
    <ul>
      <li><a href="candrwg.my.id">{!navValue ? "Home": navValue}</a></li>
      <li><a href="candrwg.my.id">About</a></li>
      <li><a href="candrwg.my.id">Contact</a></li>
    </ul>
  )
};

export default Navbar;
