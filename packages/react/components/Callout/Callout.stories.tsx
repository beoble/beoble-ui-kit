import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Callout from ".";

export default {
  title: "Components/Cancel",
  component: Callout,
} as ComponentMeta<typeof Callout>;

export const Default: ComponentStory<typeof Callout> = () => {
  return <Callout />;
};
