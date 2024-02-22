"use client";

import { useContext } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import styled from "styled-components";
import parse from "html-react-parser";

import { ProjectContext } from "@/app/page";

export default function NoteCard({ title, content, id }) {
  const [, setState] = useContext(ProjectContext);

  const handleDelete = ({ target }) => {
    const { id } = target;
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesWithoutRemovedId = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(notesWithoutRemovedId));
    window.dispatchEvent(new Event("storage"));
  };

  const handleEdit = ({ target }) => {
    const { id } = target;
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const [noteFromId] = notes.filter((note) => note.id == id);
    setState((prev) => ({
      ...prev,
      noteTitle: noteFromId?.title,
      noteContent: noteFromId?.content,
      noteId: id,
      showModal: true,
    }));
  };

  return (
    <NoteContainer id={id}>
      <Title>{title}</Title>
      <Content>{parse(content)}</Content>
      <ButtonContainer>
        <CiEdit size="24px" id={id} onClick={handleEdit} />
        <CiTrash size="22px" id={id} onClick={handleDelete} />
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
  height: 35px;
  overflow-x: hidden;
  overflow-y: hidden;
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
