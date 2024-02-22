import { useContext, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Editor from "./Editor";
import { ProjectContext } from "@/app/page";

export default function Modal() {
  const [state, setState] = useContext(ProjectContext);

  const handleTitle = ({ target }) => {
    setState((prev) => ({ ...prev, noteTitle: target.value }));
  };

  const handleContent = (e) => {
    setState((prev) => ({ ...prev, noteContent: e }));
  };

  const handleSubmit = () => {
    const previousNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const mountObject = {
      id: nanoid(),
      title: state.noteTitle,
      content: state.noteContent,
    };
    localStorage.setItem(
      "notes",
      JSON.stringify([...previousNotes, mountObject])
    );
    window.dispatchEvent(new Event("storage"));
    setState((prev) => ({
      ...prev,
      noteTitle: "",
      noteContent: "",
      showModal: !prev.showModal,
    }));
  };

  const toggleModal = () =>
    setState((prev) => ({ ...prev, showModal: !prev.showModal }));

  return (
    <ModalWrapper show={state.showModal}>
      <ModalContent>
        <CloseButton onClick={toggleModal}>&times;</CloseButton>
        <ContentContainer>
          <Title placeholder="Title" onChange={handleTitle} />
          <Content>
            <Editor placeholder="Type here..." setNoteContent={handleContent} />
          </Content>
          <SubmitButton onClick={handleSubmit}>Save</SubmitButton>
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
  display: flex;
  flex-direction: column;
  align-items: end;
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
  width: 100%;
`;
const SubmitButton = styled.button`
  width: 60px;
  margin-top: 30px;
  padding: 5px;
  background-color: transparent;
  border: 2px solid #aaa;
  border-radius: 25px;
  font-weight: 500;
  color: var(--font-color);
  cursor: pointer;
  :hover {
    border-color: dimgray;
    color: dimgray;
  }
`;
