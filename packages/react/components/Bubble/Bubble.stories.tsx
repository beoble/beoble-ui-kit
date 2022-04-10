import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Bubble } from ".";

export default {
  title: "Components/Bubble",
  component: Bubble,
} as ComponentMeta<typeof Bubble>;

export const Default: ComponentStory<typeof Bubble> = () => {
  return (
    <Bubble
      message="
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book."
      time={1649598412}
      sender={{
        account: "0xb033fB14cF7Dc769488Ad34Ae90D4b3AD810BB25",
        profile:
          "https://lh3.googleusercontent.com/jY3UkYH6v9OvQmTs7Fgv06DXB7IxEE1OO898p9XbB5cUlTAIML2QeUCFMOZajf-kWbtyXMM4rFKYAJoKHfShPSJPl9T7qenORAq9=w600",
        nickname: "bamnenim",
      }}
    />
  );
};
