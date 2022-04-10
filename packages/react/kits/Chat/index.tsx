import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiChatHeartFill } from "react-icons/ri";
import { MdOutlineClose, MdSend } from "react-icons/md";
import { IChatProps } from "./type";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";
import Button from "../../elements/Button";
import { Bubble } from "../../components/Bubble";
import { color, ColorProps } from "styled-system";

const ChatContainer = styled.div`
  position: fixed;
  bottom: calc(30px + env(safe-area-inset-bottom)) !important;
  right: 30px;
  z-index: 1000 !important;
`;

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
  display: flex;
  flex-direction: column;
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

const ChatBoxHeader = styled.div<ColorProps>`
  background-color: #5a9ded;
  ${color}
  padding: 12px 16px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px rgba(0, 0, 0, 0.1) inset,
    0 2px 1px -1px rgba(255, 255, 255, 0.5) inset;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatArea = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #f2f2f3;
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding: 8px;
  margin-top: auto;
`;

const ChatInput = styled.input`
  width: 100%;
  background-color: #f2f2f3;
  border: none;
  padding: 8px 32px 8px 12px;
  border-radius: 50vh;

  &:focus-visible {
    outline: none;
  }
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

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const Chat: React.FC<IChatProps> = ({ children, color, backgroundColor }) => {
  const [isEntered, setIsEntered] = useState(false);
  const [notifications, setNotifications] = useState(0);
  const [chattings, setChattings] = useState<string[]>([lorem]);
  const [chatInput, setChatInput] = useState("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const submitChatting = () => {
    if (chatInput) {
      setChattings([...chattings, chatInput]);
      setChatInput("");
    }
  };

  const onChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onChatInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>);
      submitChatting();
    }
  };

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
    range: [0, 0.4, 0.6, 0.8, 1],
    output: [0, 1.1, 1.1, 0.9, 1],
  };

  const bounceExit = {
    range: [0, 0.3, 0.4, 1],
    output: [0, 1.1, 1.1, 1],
  };

  useEffect(() => {
    console.log("isEntered ?: ", isEntered);
  }, [isEntered]);

  useEffect(() => {
    console.log(chatContainerRef.current);
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
  }, [chatContainerRef, chattings]);

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
        style={{
          scale: boxSpring.x.to(isEntered ? bounceEnter : bounceExit),
        }}
      >
        <ChatBoxHeader backgroundColor="#333333">
          Beoble
          <Button
            style={{ backgroundColor: "none" }}
            onClick={() => {
              setIsEntered(false);
            }}
            padding={0}
            backgroundColor="transparent"
            color="#ffffff"
          >
            <MdOutlineClose fontSize={16} />
          </Button>
        </ChatBoxHeader>
        <ChatArea ref={chatContainerRef}>
          {chattings.map((chatting) => (
            <Bubble>{chatting}</Bubble>
          ))}
        </ChatArea>
        <ChatInputContainer>
          <ChatInput
            placeholder="Send Message"
            value={chatInput}
            onChange={onChatInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            style={{ position: "absolute", right: "20px" }}
            onClick={submitChatting}
            backgroundColor="transparent"
            padding={0}
          >
            <MdSend />
          </Button>
        </ChatInputContainer>
      </ChatBox>
    </ChatContainer>
  );
};

export default Chat;
