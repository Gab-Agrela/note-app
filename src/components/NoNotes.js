import styled from "styled-components";

export default function NoNote() {
  return (
    <Container>
      <p>No notes</p>
      <p>Add a new note</p>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
