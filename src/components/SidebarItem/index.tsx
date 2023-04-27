// Import
import { Container } from "./styles";

// Interface
interface IProps {
  Icon: string;
  Text: string;
}

const SidebarItem = ({ Icon, Text }: IProps) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
