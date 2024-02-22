"use client";

import styled from "styled-components";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function NoteCard({ title, content, id }) {
  const handleDelete = ({ target }) => {
    const { id } = target.parentElement.parentElement;
    const previousNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesWithoutRemovedId = previousNotes.filter(
      (note) => note.id !== id
    );
    localStorage.setItem("notes", JSON.stringify(notesWithoutRemovedId));
    window.dispatchEvent(new Event("storage"));
  };

  const handleEdit = ({ target }) => {
    const a = target;
  };
  return (
    <NoteContainer id={id}>
      <Title>{title}</Title>
      <Content>
        <span>{content}</span>
      </Content>
      <ButtonContainer>
        <CiEdit size="24px" onClick={handleEdit} />
        <CiTrash size="22px" onClick={handleDelete} />
      </ButtonContainer>
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  height: 300px;
  padding: 5px 20px;
  margin: 10px;
`;

const Title = styled.p`
  border-bottom: 1px solid gray;
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 15px;
  height: 30px;
  overflow-x: hidden;
`;

const Content = styled.div`
  height: 190px;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    padding: 0 2px;
  }
`;
