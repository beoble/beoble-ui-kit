import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { Colors } from "../../styles";
import { FlexCenter } from "../../styles/commons";
import { ICancelProps } from "./type";

const Cancel = styled.div`
  ${FlexCenter}
  width: 16px;
  height: 16px;
  background-color: ${Colors.neutral[3]};
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`;

const CancelButton: React.FC<ICancelProps> = ({ onCancel, color }) => {
  return (
    <Cancel onClick={onCancel}>
      <IoClose style={{ fontSize: "16px", color }} />
    </Cancel>
  );
};

export default CancelButton;
