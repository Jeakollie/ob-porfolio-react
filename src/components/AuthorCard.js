import React, { useState } from "react";

export default function AuthorCard({setIsActive, isActive}) {

  

  function handleActive(e) {
    e.preventDefault();

    setIsActive({
      active: true,
      name: e.target.id
    })
  }
    return (
        <div id="intro" className="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" className="flex justify-center py-2">
                <img className="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB image" />
              </div>
              <div id="content" className="prose lg:prose-xl px-2">
                <h1 className="text-center text-gray-800 text-4xl capitalize font-medium">Obadiah V. Jeakollie, Jr</h1>
                <small className="text-center block text-md text-gray-800">Digital Marketeer, Teacher &amp; Software Engineer</small>
                <p className="text-justify text-lg text-gray-800">Hey! I am Obadiah V. Jeakollie, Jr, I am a Web Developer and Content Creator at Optechsol.
                
                I develop and design websites for SMEs and Startups</p>
                <div id="hero-nav" className="p-6 max-w-full mx-auto">
                  <ul className="flex items-center justify-center mx-4 gap-4">
                    <li className="border border-[#B2B2B2] p-2 rounded-lg">
                      <a
                       href="#education"
                        id="work"
                         className={`${
                          isActive.active &&
                           isActive.name === 'work' &&
                            "font-bold"} font-lato text-xl`}
                            onClick={handleActive}
                            >
                              Work
                              </a>
                    </li>

                    <li className="border border-[#B2B2B2] p-2 rounded-lg">
                      <a
                       href="#education"
                        id="education" className={`${
                          isActive.Active &&
                           isActive.name === "education" &&
                            "font-bold"} font-lato text-xl`}
                            onClick={handleActive}
                            >
                              Education
                            </a>
                    </li>

                    <li className="border border-[#B2B2B2] p-2 rounded-lg">
                      <a
                       href="#education"
                        id="hobbies"
                         className={`${
                          isActive &&
                           isActive.name === "hobbies" &&
                            "font-bold"} font-lato text-xl`}
                            onClick={handleActive}
                            >
                              Hobbies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    )
}