import React, { useState, useEffect } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
  NavEthereumContainer,
} from "./SidebarElement";
import { FaEthereum } from "react-icons/fa";

const Sidebar = (props) => {
  // const [isOpen, setIsOpen] = React.useState(true);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  // const [eth, setEth] = useState("0");

  // useEffect(() => {
  //   setEth(props.ethprice);
  // }, [props]);

  // console.log(eth);
  console.log("Sidebar", props.ethTick);

  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggleSidebar}>
      <Icon>
        <CloseIcon onClick={props.toggleSidebar} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavEthereumContainer>
            {/* <NavEthereoumText>
              1{" "}
              {
                <NavEthereoumLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png?20161015085252" />
              }{" "}
              ETH = $3,000
            </NavEthereoumText> */}
            1 <FaEthereum className="eth"></FaEthereum>
            {" = " + props.ethTick + " USD"}
          </NavEthereumContainer>
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
