import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from ".";

export default {
  title: "Elements/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Square: ComponentStory<typeof Avatar> = () => {
  return (
    <Avatar
      size={100}
      src="https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"
    />
  );
};

export const Circle: ComponentStory<typeof Avatar> = () => {
  return (
    <Avatar
      size={24}
      shape="circle"
      src="https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"
    />
  );
};
