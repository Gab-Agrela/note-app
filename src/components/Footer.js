"use client";
import { CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";

import Modal from "./Modal";
import { ProjectContext } from "@/app/page";
import { useContext } from "react";

export default function Footer() {
  const [, setState] = useContext(ProjectContext);

  const toggleModal = () =>
    setState((prev) => ({ ...prev, showModal: !prev.showModal }));

  return (
    <FooterContainer>
      <CiCirclePlus size="38px" onClick={toggleModal} />
      <Modal />
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
