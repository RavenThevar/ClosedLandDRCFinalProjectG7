import React from "react";
import logo from "../../images/logo.png";
// import Search from "../Search";
import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavHome,
  NavSearch,
  NavMobileLogo,
  NavImage,
  NavMobileBars,
  NavEthereumContainer,
  NavEthereoumText,
  NavEthereoumLogo,
  NavPageLocation,
  // NavSearchBtn,
} from "./NavbarElement";

const Navbar = (props) => {
  const [searchName, setSearchName] = React.useState("");
  return (
    <div>
      <Nav>
        <NavMobileLogo>
          {/* <NavImage src="https://img.lovepik.com/free-png/20210927/lovepik-cartoon-jeep-png-image_401572129_wh1200.png" /> */}
          <NavImage src={logo} />
          <NavLink to="/">
            <NavHome>ClosedLand</NavHome>
          </NavLink>
        </NavMobileLogo>
        <NavMenu>
          <NavEthereumContainer>
            <NavEthereoumText>
              1{" "}
              {
                <NavEthereoumLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png?20161015085252" />
              }{" "}
              ETH = $3,000
            </NavEthereoumText>
          </NavEthereumContainer>
          <NavSearch
            className="fa"
            placeholder="&#xf002; Can't Find Your NFT?"
            onChange={(event) => {
              setSearchName(event.target.value);
            }}
          />
          <NavEthereumContainer>
            <NavLink to="/explore">
              <NavPageLocation>Explore</NavPageLocation>
            </NavLink>
            <NavLink to="/stats">
              <NavPageLocation>Stats</NavPageLocation>
            </NavLink>
            <NavLink to="/aboutus">
              <NavPageLocation>About Us</NavPageLocation>
            </NavLink>
          </NavEthereumContainer>
        </NavMenu>
        <NavMobileBars>
          <Bars onClick={props.toggle} />
        </NavMobileBars>
        <NavBtn>
          <NavBtnLink to="/signin">Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
