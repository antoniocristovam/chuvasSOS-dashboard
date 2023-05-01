// Import
import { Container, Content, Image } from "./styles";
import { FaTimes, FaHome, FaUserAlt, FaChartBar } from "react-icons/fa";
import SidebarItem from "../SidebarItem";
import { Nav, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import Logo from "../../images/chuvaSOS.png"

// Interface
interface IProps {
  active: (item: boolean) => void;
}

const Sidebar = ({ active }: IProps) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={true} onMouseLeave={closeSidebar}>
      <FaTimes onClick={closeSidebar} />
      <Image src={Logo}/>
      <Content>
        <Nav>
          <NavLink className="option">
            <Link to={"/"} style={{textDecoration: 'none'}}>
              <SidebarItem Icon={FaHome} Text="Home" />
            </Link>
          </NavLink>
          <NavLink className="option">
            <Link to={"/alertas"} style={{textDecoration: 'none'}}>
              <SidebarItem Icon={FaChartBar} Text="Alertas" />
            </Link>
          </NavLink>
          <NavLink className="option">
            <Link to={"/abrigos"} style={{textDecoration: 'none'}}>
              <SidebarItem Icon={FaUserAlt} Text="Abrigos" />
            </Link>
          </NavLink>
        </Nav>
      </Content>
    </Container>
  );
};

export default Sidebar;
