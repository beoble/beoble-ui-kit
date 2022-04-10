import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CancelButton from ".";

export default {
  title: "Components/Cancel",
  component: CancelButton,
} as ComponentMeta<typeof CancelButton>;

export const Default: ComponentStory<typeof CancelButton> = () => {
  return <CancelButton />;
};
