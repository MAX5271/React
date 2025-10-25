import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};
const Card = () => {
  return (
    <div className="card data">
      <img src="Person.jpg" alt="Photo of a Person" className="avatar" />
      <h1 className="h1">Nitigya Chandel</h1>
      <p>
        Hello everyone my name is Nitigya Chandel. Currently I am a student at
        IIIT Ranchi and i aspire to be a software developer.
      </p>
      <SkillList />
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
};

const Skill = ({ skillObj }) => {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <h4>
        {skillObj.skill}
        {
          skillObj.level=="advanced"?
          <span>💪</span>:skillObj.level=="intermediate"?
          <span>👍</span>:<span>👶</span>
        }
      </h4>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
