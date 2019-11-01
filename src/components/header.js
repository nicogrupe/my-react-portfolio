import React from "react";
import Navbar from "./navbar";
import IntroSection from "./intro_section";

class Header extends React.Component {
  render() {
    return (
      <header>
        
        <Navbar></Navbar>
        
        <IntroSection></IntroSection>
      </header>
    );
  }
}

export default Header;
