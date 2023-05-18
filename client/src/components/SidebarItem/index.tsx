import { Container } from "./styles";

interface IProps {
  Icon: string;
  Text: string;
}

const SidebarItem = ({ Text, Icon }: IProps) => {
  return (
    <Container className="d-flex align-items-center pe-4 ">
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
