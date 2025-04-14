import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaDownload, FaCode, FaBriefcase } from "react-icons/fa";

const Education = () => {
    return (
        <>
            <div name="Education" className="container max-w-screen-2xl mx-auto px-4 md:px-20 text-white bg-[#222]">
                <div className="md:py-24 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase text-white md:mb-20 mb-10 text-center">
                        Education & Training
                        <span className="block h-1 bg-cyan-500 w-24 mt-2 mx-auto"></span>
                    </h1>

                    <div className="max-w-3xl mx-auto bg-[#2a2a2a] hover:bg-[#2f2f2f] transition duration-300 border border-white/10 shadow-lg hover:shadow-cyan-500/20 rounded-xl p-6 group">
                        <a href="https://daffodilvarsity.edu.bd" target="_blank">
                            <div className="flex items-center space-x-4">
                                <div className="bg-cyan-600 p-3 rounded-full text-white shadow-md group-hover:scale-110 transform transition duration-300">
                                    <FaGraduationCap size={24} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-cyan-400">
                                        B.Sc. (Hons) in Software Engineering
                                    </h2>
                                    <p className="text-gray-300 text-base">Daffodil International University</p>
                                    <p className="text-gray-400 text-sm">2019 – 2023</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Education;