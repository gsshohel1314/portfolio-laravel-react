import React from "react";
import {FaFacebook, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    // Social Links
    const socialLinks = [
        {
            id: 3,
            icon: <FaFacebook className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
            link: "https://facebook.com"
        },
        {
            id: 2,
            icon: <FaLinkedin className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
            link: "https://www.linkedin.com/in/shohel-rana-397448126/"
        },
        {
            id: 4,
            icon: <FaTwitter className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
            link: "https://x.com/"
        },
        {
            id: 5,
            icon: <FaInstagram className="text-2xl hover:scale-110 duration-200 cursor-pointer" />,
            link: "https://instagram.com"
        }
    ];

    return (
        <>
            <footer className="container max-w-screen-2xl mx-auto px-4 md:px-32 text-white">
                <div className="md:py-8 py-8">
                    <div className="flex flex-col items-center justify-center">
                        <ul className="flex space-x-5">
                            {
                                socialLinks.map(({id, icon, link}) => (
                                    <li key={id}>
                                        <a href={link} target="_blank">
                                            {icon}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="mt-8 border-t border-gray-600 pt-8 flex flex-col items-center">
                            <p className="text-sm">
                                &copy; 2023 Shohel. All rights reserved.
                            </p>
                            
                            <p className="flex items-center justify-center text-sm gap-2">
                                Your Supportive Partner
                                <FaHeart className="text-red-500" />
                                <span className="font-bold text-cyan-400">Shohel</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;