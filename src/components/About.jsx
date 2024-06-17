import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        👋 Hey there! I'm a passionate tech enthusiast with a love for problem-solving and competitive programming.
        My primary language is C++, where I thrive in crafting elegant solutions. I've also delved into the world of web development,
        particularly in JavaScript and REACT.JS .
        </p>

        <br />

        <p className="text-xl">
        🚀 I enjoy the dynamic nature of tech, and my curiosity drives me to constantly explore new technologies and venture into diverse fields.
        HTML and CSS are part of my toolkit, figma is adding that extra layer to my skill set.
        </p>
      </div>
    </div>
  );
};

export default About;
