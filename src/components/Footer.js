"use client";
import { CiCirclePlus } from "react-icons/ci";

import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <CiCirclePlus size="38px" />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: end;
  svg {
    padding: 0 8px;
    cursor: pointer;
  }
`;
