import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElement";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon>
        <CloseIcon onClick={props.toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/explore">Explore</SidebarLink>
          <SidebarLink to="/stats">Stats</SidebarLink>
          <SidebarLink to="/aboutus">About Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign Out</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
