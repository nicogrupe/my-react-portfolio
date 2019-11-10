import React from "react";
import MyExperience from "./my_experience";
import DevelopmentSkills from "./development_skills";
import '../App.scss';

class Skills extends React.Component {
  render() {
    return (
      <section id="skills">
        
        <div className="row py-5">
          
          <MyExperience></MyExperience>
          
          
          <DevelopmentSkills></DevelopmentSkills>
          
        </div>
        
      </section>
    );
  }
}

export default Skills;
