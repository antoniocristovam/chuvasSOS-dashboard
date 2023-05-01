// Import
import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaUserAlt, FaChartBar } from "react-icons/fa";
import SidebarItem from "../SidebarItem";
import { Nav, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

// Interface
interface IProps {
  active: (item: boolean) => void;
}

const Sidebar = ({ active }: IProps) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={true}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Nav>
          <NavLink className="option">
            <Link to={"/"}>
              <SidebarItem Icon={FaHome} Text="Home" />
            </Link>
          </NavLink>
          <NavLink className="option">
            <Link to={"/alertas"}>
              <SidebarItem Icon={FaChartBar} Text="Alertas" />
            </Link>
          </NavLink>
          <NavLink className="option">
            <Link to={"/abrigos"}>
              <SidebarItem Icon={FaUserAlt} Text="Abrigos" />
            </Link>
          </NavLink>
        </Nav>
        {/* <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" /> */}
      </Content>
    </Container>
  );
};

export default Sidebar;
