import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from ".";

export default {
  title: "Elements/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = () => {
  return <Switch />;
};
