import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => {
  return <Card />;
};