import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Bubble } from ".";

export default {
  title: "Components/Bubble",
  component: Bubble,
} as ComponentMeta<typeof Bubble>;

export const Default: ComponentStory<typeof Bubble> = () => {
  return (
    <Bubble>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Bubble>
  );
};
