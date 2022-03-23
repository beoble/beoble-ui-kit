import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { RiChatHeartFill } from "react-icons/ri";
import Button from "../../components/Button";
import { IChatProps } from "./type";

const ChatContainer = styled.div`
  position: fixed;
  bottom: calc(30px + env(safe-area-inset-bottom)) !important;
  right: 30px;
  z-index: 1000 !important;
`;

const ChatButtonBounceIn = keyframes`
  0% { transform: scale(1); opacity: 1 }
  70% { transform: scale(1.1); opacity: 0.7 }
  80% { transform: scale(1.1); opacity: 0.9 }
  100% { transform: scale(0); opacity: 1}
`;

const ChatButtonBounceOut = keyframes`
  0% { transform: scale(1); opacity: 1 }
  50% { transform: scale(1.1); opacity: .7; }
  60% { transform: scale(0.6); opacity: 1 }
  80% { transform: scale(0.85) }
  100% { transform: scale(1) }
`;

const ChatBoxBonceEnter = keyframes`
  0% { transform: scale(0); opacity: 1 }
  50% { transform: scale(1.1); opacity: .7; }
  60% { transform: scale(0.6); opacity: 1 }
  80% { transform: scale(0.85) }
  100% { transform: scale(1) }
`;
const ChatBoxBonceExit = keyframes``;

interface IChatButtonProps {
  enter?: boolean;
  backgroundColor?: string;
}

const ChatButton = styled(Button)<IChatButtonProps>`
  width: 60px;
  height: 60px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#ffffff"};
  border-radius: 26px !important;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
    rgb(255 255 255 / 20%) 0px 0px 0px 1px inset !important;

  ${({ enter }) =>
    enter
      ? css`
          animation: ${ChatButtonBounceIn} 1s;
          transform: scale(0);
          transition: transform 0 1s;
        `
      : css`
          animation: ${ChatButtonBounceOut} 1s;
          transform: scale(1);
        `}
`;

const ChatBox = styled.div<IChatButtonProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 370px;
  height: 500px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 30%) 0px 12px 60px 5px !important;

  ${({ enter }) =>
    enter
      ? css`
          animation: ${ChatBoxBonceEnter} 1s 1s;
          transform: scale(0);
          transition: transform 0 1s;
        `
      : css`
          animation: ${ChatBoxBonceExit} 1s;
          transform: scale(0);
        `}
`;

const Chat: React.FC<IChatProps> = ({ children, color, backgroundColor }) => {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <ChatContainer>
      <ChatButton
        enter={isEntered}
        onClick={() => {
          setIsEntered(!isEntered);
        }}
        backgroundColor={backgroundColor}
      >
        {children ?? (
          <RiChatHeartFill fontSize={32} color={color ?? "#5a9ded"} />
        )}
      </ChatButton>
      {isEntered && <ChatBox enter={isEntered}></ChatBox>}
    </ChatContainer>
  );
};

export default Chat;
