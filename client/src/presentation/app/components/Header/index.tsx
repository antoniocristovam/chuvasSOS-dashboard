import {
  FaHome,
  FaUserAlt,
  FaChartBar,
  FaMapSigns,
  FaMapMarked,
} from "react-icons/fa";
import { Nav, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import SidebarItem from "../SidebarItem";

// Logo
import logo from "../../../../img/chuvaSOS.png";

const Header = () => {
  return (
    <>
      <Nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          <img className="ms-4" src={logo} width="75" height="35" />
        </a>
        <NavLink className="option d-flex">
          <Link to={"/"} className="text-decoration-none">
            <SidebarItem Icon={FaHome} Text="Home" />
          </Link>
          <Link to={"/alertas"} className="text-decoration-none">
            <SidebarItem Icon={FaChartBar} Text="Alertas" />
          </Link>
          <Link to={"/abrigos"} className="text-decoration-none">
            <SidebarItem Icon={FaMapMarked} Text="Abrigos" />
          </Link>
          <Link to={"/infos"} className="text-decoration-none">
            <SidebarItem Icon={FaUserAlt} Text="Informações" />
          </Link>
        </NavLink>
      </Nav>
    </>
  );
};

export default Header;
