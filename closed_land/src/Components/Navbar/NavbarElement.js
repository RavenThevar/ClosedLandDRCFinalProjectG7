import styled, { keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { icons } from "react-icons/lib";

export const Nav = styled.nav`
  background: #0f595a;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  align-items: center;
  z-index: 10;
`;

export const NavMobileLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  grid-column: 1 / 3;
`;

export const NavMobileBars = styled.div`
  display: none;
  @media screen and (max-width: 845px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-column: 3 / 6;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-column: 3 / 6;

  @media screen and (max-width: 845px) {
    display: none;
  }
`;

export const NavEthereumContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavEthereoumText = styled.span`
  font-size: 30px;
  color: #ffffff;

  @media screen and (max-width: 846px) {
    font-size: 18px;
  }
`;

export const NavEthereoumLogo = styled.img`
  height: 25px;
  width: 20px;

  @media screen and (max-width: 846px) {
    height: 15px;
    width: 10px;
  }
`;

export const NavPageLocation = styled.span`
  font-size: 25px;
  color: #ffffff;

  @media screen and (max-width: 846px) {
    font-size: 16px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }

  @media screen and (max-width: 845px) {
    grid-column: 2 / 3;
  }
`;

export const NavSearch = styled.input`
  height: 40px;
  width: 400px;
  font-size: 16px;
  border-radius: 1rem;
  padding-left: 10px;
  border: none;

  @media screen and (max-width: 846px) {
    width: 200px;
  }
`;

export const NavSearchBtn = styled(FaSearch)`
  font-size: 1.8rem;
  background: #fff;
  height: 40px;
  width: 60px;
  color: black;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e5dfe8;
    color: #010606;
  }
`;

// const breatheAnimation = keyframes`
// from {
//     text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 30px #e60073, 0 0 20px #fff, 0 0 10px #fff;
//   }
//   to {
//     text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 40px #ff4da6, 0 0 30px #ff4da6, 0 0 20px #fff;
//   }
// `;

const flickerAnimation = keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {

      text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  
  }
  
  20%, 24%, 55% {        
      text-shadow: none;
  } 
`;

// const typeWritter = keyframes`
//   from { width: 0 }
//   to { width: 100% }
// `;

export const NavSpan = styled.h1`
  font-size: 35px;
  color: #FFFFFF;
}
`;
// text-shadow:
//     0 0 7px #15cdfc,
//     0 0 10px #15cdfc,
//     0 0 21px #15cdfc,
//     0 0 42px #0fa,
//     0 0 82px #0fa,
//     0 0 92px #0fa,
//     0 0 102px #0fa,
//     0 0 151px #0fa;

export const NavHome = styled.h1`
  font-size: 40px;
  color: #FFFFFF;

  @media screen and (max-width: 846px) {
    font-size: 18px;
  }
}
`;
// text-shadow:
//     0 0 7px #15cdfc,
//     0 0 10px #15cdfc,
//     0 0 21px #15cdfc,
//     0 0 42px #0fa,
//     0 0 82px #0fa,
//     0 0 92px #0fa,
//     0 0 102px #0fa,
//     0 0 151px #0fa;
// animation: ${flickerAnimation} 1.5s infinite alternate;

export const NavImageWrapper = styled.div`
  postition: relative;
  padding-top: 10px;
  border-radius: 1rem;

  @media screen and (max-width: 845px) {
    grid-column: 1 / 2;
  }
`;

export const NavImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 9rem;

  @media screen and (max-width: 846px) {
    height: 30px;
    width: 30px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 845px) {
    display: block;
    justify-content: flex-end;
    font-size: 1.8rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 845px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ff2f00;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
