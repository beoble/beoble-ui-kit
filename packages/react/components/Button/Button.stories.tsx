import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  return <Button />;
};
