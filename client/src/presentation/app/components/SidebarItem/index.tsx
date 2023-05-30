import { Container } from "./styles";

interface IProps {
  Icon: string;
  Text: string;
}

const SidebarItem = ({ Text, Icon }: IProps) => {
  return (
    <Container className="d-flex align-items-center pe-4 me-2">
      <div className="me-2">
        <Icon />
      </div>
      {Text}
    </Container>
  );
};

export default SidebarItem;
