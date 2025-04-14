import React from "react";
import checkMarkIcon from '../assets/checkmark-dark.svg';

const Skills = () => {
    const skills = [
        { id: 1, name: "PHP" },
        { id: 2, name: "Laravel" },
        { id: 3, name: "REST API" },
        { id: 4, name: "MySQL" },
        { id: 5, name: "Redis" },
        { id: 6, name: "Socket.IO" },
        { id: 7, name: "JavaScript" },
        { id: 8, name: "jQuery" },
        { id: 9, name: "React.js" },
        { id: 10, name: "Vue.js" },
        { id: 11, name: "Inertia.js" },
        { id: 12, name: "HTML" },
        { id: 13, name: "CSS" },
        { id: 14, name: "Bootstrap" },
        { id: 15, name: "Tailwind CSS" },
        { id: 16, name: "GitHub" },
        { id: 17, name: "Git" },
        { id: 18, name: "Postman" },
        { id: 19, name: "Linux" },
        { id: 20, name: "Jira" },
        { id: 21, name: "YouTrack" },
    ];
      
    return (
        <>
            <div name="Skills" className="container max-w-screen-2xl mx-auto px-4 md:px-48 text-white">
                <div className="md:py-24 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase text-white md:mb-20 mb-10 text-center">
                        Skills & Expertise
                        <span className="block h-1 bg-cyan-500 w-24 mt-2 mx-auto"></span>
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {
                            skills.map(({id, name}) => (
                                <div
                                    key={id}
                                    className="flex items-center gap-3 bg-[#2a2a2a] hover:bg-[#2f2f2f] border border-white/10 hover:shadow-cyan-500/20 px-4 py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-200"
                                >
                                    <img src={checkMarkIcon} alt="check" className="w-5 h-5" />
                                    <span className="text-sm md:text-base">{name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;

