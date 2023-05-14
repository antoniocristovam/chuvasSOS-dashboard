import { Container } from "./styles";

interface IProps {
  Icon: string;
  Text: string;
}

const SidebarItem = ({ Icon, Text }: IProps) => {
  return (
    <Container className="">
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
