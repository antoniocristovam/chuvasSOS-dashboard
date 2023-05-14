//Import
import styled from "styled-components";

// Interface
interface IProps {
  sidebar: boolean;
}

export const Container = styled.div<IProps>`
  background-color: #1a202c;
  position: fixed;
  height: 100vh;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > svg {
    color: white;
    width: 30px;
    height: 30px;
    margin: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 42px;
`;

export const Image = styled.img`
  width: 124px;
`
