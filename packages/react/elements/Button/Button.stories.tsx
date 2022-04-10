import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MdOutlineClose, MdSend } from "react-icons/md";
import Button from ".";

export default {
  title: "Elements/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  return <Button>Test Button!</Button>;
};

export const Icon: ComponentStory<typeof Button> = () => {
  return (
    <Button>
      <MdSend />
    </Button>
  );
};
