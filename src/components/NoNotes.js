import styled from "styled-components";
import { CiStickyNote } from "react-icons/ci";

export default function NoNote() {
  return (
    <Container>
      <CiStickyNote size="38px" />
      <p>No notes</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
