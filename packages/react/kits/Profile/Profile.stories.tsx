import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Profile from ".";
import ProfileModal from "./ProfileModal";

export default {
  title: "Kits/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

export const Default: ComponentStory<typeof Profile> = () => {
  return <Profile />;
};

export const ProfileBtnDefault: ComponentStory<typeof Profile> = () => {
  return <Profile />;
};

export const ProfileModalDefault: ComponentStory<typeof Profile> = () => {
  return <ProfileModal />;
};
