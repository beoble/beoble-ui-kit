import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { FlexCenter } from "../../styles/common";
import { Colors } from "../../styles";

const Cancel = styled.div`
  ${FlexCenter}
  width: 16px;
  height: 16px;
  background-color: ${Colors.neutral[3]};
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`;

interface CancelProps {
  color?: string;
  onCancel?: () => void;
}

const CancelButton: React.FC<CancelProps> = ({ onCancel }) => {
  return (
    <Cancel onClick={onCancel}>
      <IoClose style={{ fontSize: "16px" }} />
    </Cancel>
  );
};

export default CancelButton;
