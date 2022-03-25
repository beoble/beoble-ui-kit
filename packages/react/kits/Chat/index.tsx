import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { RiChatHeartFill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { IChatProps } from "./type";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";

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
  0% { transform: scale(0); opacity: 1 }
  50% { transform: scale(1.1); opacity: .7; }
  60% { transform: scale(0.6); opacity: 1 }
  80% { transform: scale(0.85) }
  100% { transform: scale(1) }
`;

const ChatBoxBonceEnter = keyframes`
  0% { transform: scale(0); opacity: 1 }
  50% { transform: scale(1.1); opacity: .7; }
  60% { transform: scale(0.85); opacity: 1 }
  100% { transform: scale(1) }
`;
const ChatBoxBonceExit = keyframes`
  0% { transform: scale(1); opacity: 1 }
  70% { transform: scale(1.1); opacity: 0.7 }
  80% { transform: scale(1.1); opacity: 0.9 }
  100% { transform: scale(0); opacity: 1}`;

interface IChatButtonProps {
  enter?: boolean;
  backgroundColor?: string;
}

const ChatButton = styled(animated.button)<IChatButtonProps>`
  width: 60px;
  height: 60px;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#ffffff"};
  border-radius: 26px !important;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
    rgb(255 255 255 / 20%) 0px 0px 0px 1px inset !important;
  transform: scale(0);
`;

const ChatBox = styled(animated.div)<IChatButtonProps>`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 280px;
  height: 400px;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 30%) 0px 12px 60px 5px !important;
  transform-origin: bottom right;
  transform: scale(0);
`;

const Notification = styled.div`
  background-color: red;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 4px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Chat: React.FC<IChatProps> = ({ children, color, backgroundColor }) => {
  const [isEntered, setIsEntered] = useState(false);
  const [notifications, setNotifications] = useState(0);

  const buttonApi = useSpringRef();
  const buttonSpring = useSpring({
    ref: buttonApi,
    from: { x: 0 },
    x: isEntered ? 0 : 1,
    config: { duration: 700 },
  });

  const boxApi = useSpringRef();
  const boxSpring = useSpring({
    ref: boxApi,
    x: isEntered ? 1 : 0,
    config: { duration: 500 },
  });

  const bounceEnter = {
    range: [0, 0.5, 0.6, 0.8, 1],
    output: [0, 1.1, 0.8, 0.9, 1],
  };

  const bounceExit = {
    range: [0, 0.3, 0.4, 1],
    output: [0, 1.1, 1.1, 1],
  };

  useEffect(() => {
    console.log("isEntered ?: ", isEntered);
  }, [isEntered]);

  useChain(isEntered ? [buttonApi, boxApi] : [boxApi, buttonApi]);

  return (
    <ChatContainer>
      <ChatButton
        onClick={() => {
          setIsEntered(!isEntered);
          setNotifications(notifications + 1);
        }}
        style={{
          scale: buttonSpring.x.to(isEntered ? bounceExit : bounceEnter),
        }}
        backgroundColor={backgroundColor}
      >
        {notifications > 0 && <Notification>{notifications}</Notification>}
        {children ?? (
          <RiChatHeartFill fontSize={32} color={color ?? "#5a9ded"} />
        )}
      </ChatButton>
      <ChatBox
        onClick={() => setIsEntered(false)}
        style={{
          scale: boxSpring.x.to(isEntered ? bounceEnter : bounceExit),
        }}
      >
        <MdOutlineClose />
      </ChatBox>
    </ChatContainer>
  );
};

export default Chat;
