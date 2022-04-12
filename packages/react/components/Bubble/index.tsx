import React from "react";
import styled from "styled-components";
import Avatar from "../../elements/Avatar";
import { IBubbleProps, IMessage } from "./type";

export const BubbleContainer = styled.div<IBubbleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: #f2f2f3;
  width: fit-content;
  max-width: 180px;
  border-radius: 12px;
  font-size: 12px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 8px;
`;

export const Bubble: React.FC<IMessage> = ({ message, sender, time }) => {
  return (
    <MessageContainer>
      <Avatar size={32} shape="circle" src={sender.profile} />
      <BubbleContainer>{message}</BubbleContainer>
      <TimeContainer>{time}</TimeContainer>
    </MessageContainer>
  );
};
