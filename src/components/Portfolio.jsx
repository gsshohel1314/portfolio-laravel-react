import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import PhysioCare from "../assets/portfolio/physiocare-wellness-center.jpg";
import ShipSimple from "../assets/portfolio/shipsimple.jpg";
import Shush from "../assets/portfolio/shush.jpg";
import UniversityPortal from "../assets/portfolio/student-portal.jpg";
import Estore from "../assets/portfolio/e-store.jpg";
import Workshop from "../assets/portfolio/workshop.png";
import Enoc from "../assets/portfolio/enoc.webp";
import Ecommerce from "../assets/portfolio/e-commerce.jpg";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: PhysioCare,
            title: "PhysioCare Wellness Centre",
            category: "Web",
            description: "A website for patient and appointment management systems.",
            link: "https://physiocare.prolificlogic.com/"
        },
        {
            id: 2,
            image: ShipSimple,
            title: "ShipSimple",
            category: "Web",
            description: "A courier shipping platform with Canada’s top couriers.",
            link: "https://shipsimple.ca/"
        },
        {
            id: 3,
            image: Shush,
            title: "Shush Privacy App",
            category: "App",
            description: "A mobile app for signing and managing Non-Disclosure Agreements (NDAs)",
            link: "https://apps.apple.com/us/app/shush-privacy-app/id6476983966"
        },
        {
            id: 4,
            image: UniversityPortal,
            title: "University Portal",
            category: "Web",
            description: "A student portal with Career Counseling, Alumni Networking and Job Placement.",
            link: "https://ccc.ewubd.edu"
        },
        {
            id: 5,
            image: Estore,
            title: "Store Management System (E-store)",
            category: "Web",
            description: "A solution for inventory management syestem.",
            link: "https://estore.fireservice.gov.bd/login"
        },
        {
            id: 6,
            image: Workshop,
            title: "Workshop Management System",
            category: "Web",
            description: "A Workshop Management System that manages workshop operations.",
            link: "https://workshop.fireservice.gov.bd/login"
        },
        {
            id: 7,
            image: Enoc,
            title: "E-NOC",
            category: "Web",
            description: "A system for issuing No Objection Certificates (NOCs) for multi-storied and commercial buildings.",
            link: "https://enoc.fireservice.gov.bd/login"
        },
        {
            id: 8,
            image: Ecommerce,
            title: "Multi Vendor E-Commerce",
            category: "E-Commerce",
            description: "A solution for Multi Vendor E-Commerce marketplace platform.",
            link: "#"
        }
    ];

    const categories = ["All", "App", "Web", "E-Commerce"];

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div name="Portfolio" className="container max-w-screen-2xl mx-auto px-4 md:px-48 text-white">
            <div className="md:py-24 py-8">
                <h1 className="text-3xl md:text-4xl font-bold uppercase text-white md:mb-20 mb-10 text-center">
                    Portfolio
                    <span className="block h-1 bg-cyan-500 w-24 mt-2 mx-auto"></span>
                </h1>

                <div className="flex justify-center space-x-4 mb-10 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-sm px-4 py-2 rounded-full transition font-medium ${
                                activeCategory === category
                                    ? "bg-cyan-600 text-white"
                                    : "bg-white/10 hover:bg-cyan-500 text-gray-200"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredProjects.map(({ id, image, title, description, link }) => (
                        <div
                            key={id}
                            className="w-full max-w-sm mx-auto aspect-[4/3] relative overflow-hidden group rounded-lg"
                        >

                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />

                            <div
                                className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10 px-4"
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                            >
                                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                                <p className="text-gray-200 text-sm mb-4">{description}</p>
                                <a
                                    href={link}
                                    target="_blank"
                                    className="text-white text-sm font-medium px-4 py-2 rounded-md transition"
                                >
                                    <FaExternalLinkAlt className="hover:text-cyan-500 text-white text-2xl" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
