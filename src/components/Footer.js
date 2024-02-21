"use client";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";

import Modal from "./Modal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <FooterContainer>
      <CiCirclePlus size="38px" onClick={toggleModal} />
      <Modal showModal={showModal} toggleModal={toggleModal} />
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
