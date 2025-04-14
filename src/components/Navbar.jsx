import React, {useState} from "react";
import ProfileImage from "../assets/shohel_1.jpg";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu,setMenu] = useState(false);

    const navbarItems = [
        { id: 1, name: "Home" },    
        { id: 3, name: "Portfolio" },
        { id: 4, name: "Resume" },
        { id: 2, name: "Skills" },
        { id: 5, name: "Education" },
        { id: 6, name: "Contacts" }
    ]

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-20 bg-black/70 backdrop-blur-md shadow-md h-16">
                <div className="container max-w-screen-2xl mx-auto px-4 md:px-48 h-full flex items-center justify-between text-white">
                    {/* Logo and Name */}
                    <div className="flex items-center space-x-3 cursor-pointer">
                        <img className="h-12 w-12 rounded-full border border-cyan-500 p-1" src={ProfileImage} alt="Profile" />
                        <div>
                            <h1 className="font-bold text-xl leading-none">
                                Shohel<span className="text-cyan-500">Rana</span>
                            </h1>
                            <p className="text-sm text-gray-400">Web Developer</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        {navbarItems.map(({ id, name }) => (
                            <li key={id} className="relative group cursor-pointer">
                                <Link
                                    to={name}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                    className="transition-colors duration-200"
                                >
                                    {name}
                                </Link>
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-30" onClick={() => setMenu(!menu)}>
                        {menu ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menu && (
                    <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center space-y-6 text-white text-xl z-10">
                        {navbarItems.map(({ id, name }) => (
                            <Link
                                key={id}
                                onClick={() => setMenu(false)}
                                to={name}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active"
                                className="hover:text-cyan-500 transition"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;