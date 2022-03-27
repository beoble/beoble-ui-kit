import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { MdSettings, MdEditNote } from "react-icons/md";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  white-space: nowrap;
  width: fit-content;
  height: 40px;
  max-width: 200px;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 14px;
  cursor: pointer;
  user-select: none;
  height: 36px;
  margin-right: 2px;
  margin-left: 1px;
  background-color: rgb(216, 216, 216);
  border: 1px solid rgb(247, 248, 250);
  color: rgb(0, 0, 0);
  font-weight: 500;
  box-sizing: border-box;
  min-width: 0px;
  appearance: none;
  font-size: 16px;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  line-height: inherit;
`;

const AddressP = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px 0.5rem 0px 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 600;
`;

const Desciption = styled.div`
  margin-top: "10px";
  font-size: 12px;
  font-weight: 500px;
  flex: 1 1 auto;
  width: 100%;
  word-wrap: break-word;
  white-space: initial;
`;

const SettingButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ProfileDetailContainer = styled(animated.div)`
  position: fixed;
  width: 300px;
  height: 240px;
  background-color: #ffffff;
  bottom: -240px;
  right: 0;
  border-radius: 12px;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 30%) 0px 12px 60px 5px !important;
  transform-origin: top right;
`;

const Profile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const spring = useSpring({
    transform: isOpen ? "scale(1)" : "scale(0)",
    opacity: 1,
  });

  return (
    <ProfileContainer>
      <AddressContainer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <AddressP>bamnenim.eth</AddressP>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"
          size={20}
          shape="circle"
        />
        <ProfileDetailContainer style={spring}>
          <SettingButton style={{ right: "30px" }}>
            <MdEditNote />
          </SettingButton>
          <SettingButton>
            <MdSettings />
          </SettingButton>

          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"
            size={80}
            shape="circle"
          />
          <AddressP style={{ marginTop: "10px" }}>bamnenim.eth</AddressP>
          <Desciption>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Desciption>
        </ProfileDetailContainer>
      </AddressContainer>
    </ProfileContainer>
  );
};

export default Profile;
