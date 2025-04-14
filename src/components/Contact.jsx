import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from "react-hot-toast";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const message = {
            name: data.name,
            email: data.email,
            message: data.message,
        }

        try {
            await axios.post("https://getform.io/f/bxowpnna", message)
            toast.success('Your message has been sent successfully!');
        } catch (error) {
            toast.error('Something went wrong!', error.message);
        }
    }

    return (
        <>
            <div name="Contacts" className="container max-w-screen-2xl mx-auto px-4 md:px-48 text-white">
                <div className="md:py-24 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase text-white md:mb-20 mb-10 text-center">
                        Contact Me
                        <span className="block h-1 bg-cyan-500 w-24 mt-2 mx-auto"></span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        {/* Left: Contact Info */}
                        <div className="flex flex-col md:items-end items-center w-full md:w-1/3 md:border-r md:border-white/10 md:pr-10">
                            <h2 className="text-xl font-semibold text-cyan-400 mb-4">Get in Touch</h2>

                            <p className="flex items-center justify-center gap-2 mb-2">
                                <IoLocationSharp size={20} className="text-white-500" />
                                <span className="font-bold text-cyan-400"> Address:</span> Dhaka, Bangladesh
                            </p>

                            <p className="flex items-center justify-center gap-2 mb-2">
                                <FaPhoneFlip size={20} className="text-white-500" />
                                <span className="font-bold text-cyan-400"> Phone:</span> +8801723-559950
                            </p>

                            <p className="flex items-center justify-center gap-2 mb-2">
                                <IoMail size={20} className="text-white-500" />
                                <span className="font-bold text-cyan-400"> Email:</span> gsshohel1314@gmail.com
                            </p>
                        </div>

                        {/* Right: Contact Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            // action="https://getform.io/f/bxowpnna"
                            // method="POST"
                            className="w-full max-w-lg px-8 py-8 bg-[#2a2a2a] rounded-xl border border-white/10 shadow-md hover:shadow-cyan-500/20 transition duration-300"
                        >
                            <h1 className="text-2xl font-bold mb-6 text-cyan-400 text-center uppercase tracking-wide">
                                Send Your Message
                            </h1>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        // required
                                        className="mb-2 w-full rounded-lg bg-[#1f1f1f] text-white px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                                    />
                                    {errors.name && <span className="text-red-500 text-sm italic">This field is required</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        // required
                                        className="mb-2 w-full rounded-lg bg-[#1f1f1f] text-white px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm italic">This field is required</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        type="text"
                                        id="message"
                                        name="message"
                                        placeholder="Type your message"
                                        // required
                                        rows="4"
                                        className="w-full rounded-lg bg-[#1f1f1f] text-white px-4 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                                    />
                                    {errors.message && <span className="text-red-500 text-sm italic">This field is required</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;