"use client";

import styled from "styled-components";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function NoteCard({ title, content }) {
  return (
    <NoteContainer>
      <Title>{title}</Title>
      <Content>
        <span>{content}</span>
      </Content>
      <ButtonContainer>
        <CiEdit size="24px" />
        <CiTrash size="22px" />
      </ButtonContainer>
    </NoteContainer>
  );
}

const NoteContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  height: 300px;
  padding: 5px 20px;
`;

const Title = styled.p`
  border-bottom: 1px solid gray;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
`;

const Content = styled.div`
  height: 170px;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    padding: 0 2px;
  }
`;
