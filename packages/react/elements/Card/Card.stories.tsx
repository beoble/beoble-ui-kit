import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "Elements/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => {
  return <Card width={200} height={300} />;
};
