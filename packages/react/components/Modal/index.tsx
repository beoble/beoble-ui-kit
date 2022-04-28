import { setMediaQuery } from "../../styles";
import React from "react";
import styled, { css } from "styled-components";

const ModalContainer = styled.div`
  border-radius: 15px;
  height: 100%;

  ${setMediaQuery(css``)};
`;

// Modal should handle both desktop env and mobile env
// useGesture for mobile
// Cardbox for desktop

const Modal = () => {
  return <ModalContainer></ModalContainer>;
};

export default Modal;
