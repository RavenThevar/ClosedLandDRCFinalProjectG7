import React from "react";
import "./Profile.css";
import CoverProfile from "../images/headerProfile.jpg";
import ProfileImage from "../images/profilePicture.jpg";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { Container, Tab, Tabs } from "react-bootstrap";

const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div className="container-main">
        <div className="header-img">
          <img className="profile-header" src={CoverProfile} alt="jpg" />
        </div>
        <div className="section-2">
          <div className="profile-name">
            <div className="myprofile">My Profile</div>
            <Container>
              <img className="profile-img" src={ProfileImage} alt="jpg" />
            </Container>
            {/* <img className="profile-img" src={ProfileImage} alt="jpg" /> */}
            <div className="username-date">CoolGuyz$$$</div>
            <div className="username-date">12th June 2020</div>
          </div>
          <div className="my-wallet">
            <div className="myprofile"> My Wallet</div>
            <Container className="wallet-balance"></Container>
          </div>
          <Container>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Favorited">
                <h2>qqqq</h2>
              </Tab>
              <Tab eventKey="profile" title="Collected">
                <h2>ddd</h2>
              </Tab>
              <Tab eventKey="contact" title="Watchlist">
                <h2>ggg</h2>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
