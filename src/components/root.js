import React from "react";
import Header from "./header";
import Main from "./main";
import Scrollspy from './scrollspy'

class Root extends React.Component {
  render() {
    return (
      <div>
        
      <Header></Header>
      
      <Main></Main>
      
      <Scrollspy></Scrollspy>
      
      </div>
    );
  }
}

export default Root;
