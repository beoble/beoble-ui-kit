import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 480px;
  min-height: 100%;
`;

const ModalCardBox = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: #121212;
  border-radius: 24px;
`;

const ProfileModal = () => {
  return (
    <ModalContainer>
      <ModalCardBox>hi</ModalCardBox>
    </ModalContainer>
  );
};

export default ProfileModal;
