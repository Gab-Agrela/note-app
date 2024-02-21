import styled from "styled-components";
import Editor from "./Editor";

export default function Modal({ showModal, toggleModal }) {
  return (
    <ModalWrapper show={showModal}>
      <ModalContent>
        <CloseButton onClick={toggleModal}>&times;</CloseButton>
        <ContentContainer>
          <Title placeholder="Title" />
          <Content>
            <Editor placeholder="Type here..." />
          </Content>
        </ContentContainer>
      </ModalContent>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  background-color: var(--bg-color);
  border: 2px solid gray;
  width: 500px;
  height: 500px;
  padding: 5px 20px;
  margin: 10px;
`;
const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: dimgray;
    text-decoration: none;
  }
`;
const ContentContainer = styled.div`
  padding: 25px 10px;
`;
const Title = styled.input`
  width: 100%;
  color: var(--font-color);
  background-color: transparent;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 10px;
  border: none;
  border-bottom: 2px solid gray;
  &:focus {
    outline: none;
  }
`;
const Content = styled.div`
  margin-top: 5px;
  border-bottom: 2px solid gray;
`;
