import { useContext } from "react";
import styled from "styled-components";

import Editor from "./Editor";
import { ProjectContext } from "@/app/page";

export default function Modal() {
  const [{ showModal, noteTitle }, setState] = useContext(ProjectContext);

  const handleTitle = ({ target }) => {
    setState((prev) => ({ ...prev, noteTitle: target.value }));
  };

  const handleContent = (e) => {
    setState((prev) => ({ ...prev, noteContent: e }));
  };

  const toggleModal = () =>
    setState((prev) => ({
      ...prev,
      noteTitle: "",
      noteContent: "",
      noteId: "",
      showModal: !prev.showModal,
    }));

  return (
    <ModalWrapper show={showModal}>
      <ModalContent>
        <CloseButton onClick={toggleModal}>&times;</CloseButton>
        <ContentContainer>
          <Title
            placeholder="Title"
            onChange={handleTitle}
            value={noteTitle}
            required
          />
          <Content>
            <Editor placeholder="Type here..." setNoteContent={handleContent} />
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
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
`;
const Title = styled.input`
  width: 100%;
  color: var(--font-color);
  background-color: transparent;
  font-size: 24px;
  font-weight: 500;
  padding: 0px;
  padding-bottom: 10px;
  border: none;
  border-bottom: 2px solid gray;
  &:focus {
    outline: none;
  }
`;
const Content = styled.div`
  margin-top: 5px;
  width: 100%;
`;
