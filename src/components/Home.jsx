import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { ReactTyped } from "react-typed";
import ProfileImage from "../assets/shohel_1.jpg";

    const Home = () => {
        // Social Links
        const socialLinks = [
            {
                id: 1,
                icon: <FaGithub className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
                link: "https://github.com/gsshohel1314"
            },
            {
                id: 2,
                icon: <FaLinkedin className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
                link: "https://www.linkedin.com/in/shohel-rana-397448126/"
            },
            {
                id: 3,
                icon: <FaFacebookSquare className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
                link: "https://facebook.com"
            },
            {
                id: 4,
                icon: <FaTelegram className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
                link: "https://telegram.org"
            },
        ];

        // Currently working on
        const workingOn = [
            {
                id: 1,
                icon: <FaPhp className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
            },
            {
                id: 2,
                icon: <FaLaravel className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
            },
            {
                id: 3,
                icon: <FaReact className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
            },
            {
                id: 4,
                icon: <FaVuejs className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
            },
            {
                id: 5,
                icon: <SiMysql className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
            },
        ];

        return (
            <>
                <div name="Home" className="container max-w-screen-2xl mx-auto px-4 md:px-48 text-white">
                    <div className="md:py-16 py-8">
                        <div className="flex flex-col md:flex-row items-center md:mt-56 mt-20 md:mb-24">
                            <div className="md:w-1/2 order-2 md:order-1">
                                <span className="md:text-xl">Welcome To My World</span>
                                <div className="flex space-x-1 text-xl md:text-4xl">
                                    <h1>Hello, I'm a</h1>
                                    <ReactTyped
                                        className="text-red-700 font-bold"
                                        strings={["Software Engineer", "Web Developer", "Freelancer"]}
                                        typeSpeed={40}
                                        backSpeed={50}
                                        loop={true}
                                    />
                                </div>

                                <br />

                                <p className="text-sm md:text-md text-justify">
                                    Results-driven Software Engineer with 3+ years of experience in backend development, API design and database optimization. Eager to contribute to the company's growth by applying problem-solving and teamwork skills.
                                </p>

                                <br />

                                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                                    <div className="space-y-2 text-center md:text-left">
                                        <h1 className="font-bold">Available on</h1>
                                        <ul className="flex space-x-5">
                                            {
                                                socialLinks.map(({ id, icon, link }) => (
                                                    <li key={id}>
                                                        <a href={link} target="_blank">
                                                            {icon}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="space-y-2 text-center md:text-left">
                                        <h1 className="font-bold">Currently working on</h1>
                                        <ul className="flex space-x-5">
                                            {
                                                workingOn.map(({ id, icon }) => (
                                                    <li key={id}>
                                                        {icon}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 order-1 justify-items-center mb-10 md:mb-0">
                                <img className="md:h-[400px] md:w-[400px] h-[350px] w-[350px] rounded-full" src={ProfileImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default Home;