import React from "react";


const Experience = () => {

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the languages/frameworks I've worked with</p>
         
          <p><h1>1. HTML AND CSS</h1></p>
          <br />
          <p><h1>2. JAVASCRIPT</h1></p>
          <br />
          <p><h1>3. JAVA</h1></p>
          <br />
          <p><h1>4. Python</h1></p>
          <br />
          <p><h1>5. C</h1></p>
          <br />
          <p><h1>6. C++</h1></p>
          <br />
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {}
        </div>
      </div>
    </div>
  );
};

export default Experience;










