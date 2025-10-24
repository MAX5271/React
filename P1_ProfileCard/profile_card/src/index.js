import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => {
  return (
    <div><Card  />
    </div>
  );
};
const Card = () => {
  return (
    <div className="card data" >
      <img src="Person.jpg" alt="Photo of a Person" className="avatar" />
      <h1 className="h1">Nitigya Chandel</h1>
      <p>Hello everyone my name is Nitigya Chandel. Currently I am a student at IIIT Ranchi and i aspire to be a software developer.</p>
      <SkillList/>
    </div>
  );
};

const SkillList = ()=>{
  return (
    <div className="skill-list">
      <Skill skillName="JavaScript" skillEmoji="😁" color="red"/>
      <Skill skillName="C++" skillEmoji="💪" color="blue" />
      <Skill skillName="React" skillEmoji="👍" color="yellow"/>
      <Skill skillName="Node" skillEmoji="👌" color="green" />
    </div>
  );
}

const Skill = (props)=>{
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      <h4>{props.skillName}{props.skillEmoji}</h4>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
