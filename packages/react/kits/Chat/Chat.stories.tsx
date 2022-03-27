import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chat, { ChatBubble } from ".";

export default {
  title: "Chat",
  component: Chat,
} as ComponentMeta<typeof Chat>;

export const Default: ComponentStory<typeof Chat> = ({ size }) => {
  return <Chat size={size} />;
};

export const Bubble: ComponentStory<typeof ChatBubble> = () => {
  return (
    <ChatBubble>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </ChatBubble>
  );
};
