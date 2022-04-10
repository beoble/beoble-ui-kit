import React from "react";
import styled from "styled-components";
import Card from "../../elements/Card";
import { Colors } from "../../styles";
import { ICalloutProps } from "./type";

const CalloutContainer = styled(Card)`
  background-color: ${Colors.neutral[3]};
  color: #ffffff;
`;

const Callout: React.FC<ICalloutProps> = ({ backgroundColor }) => {
  return (
    <CalloutContainer backgroundColor={backgroundColor}></CalloutContainer>
  );
};

export default Callout;
