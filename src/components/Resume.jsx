import React from "react";

const Resume = () => {
    const experiences = [
        {
            role: "Software Engineer",
            company: "Prolific Info Tech, Dhaka",
            duration: "Dec 2023 – Present",
            details: [
                "Developed scalable web applications, handling database design, API development & real-time features.",
                "Integrated shipping APIs for comparing courier rates and tracking shipments.",
                "Collaborated with frontend teams for seamless Vue.js & React.js integration."
            ]
        },
        {
            role: "Software Engineer",
            company: "Perky Rabbit Corporation Ltd, Dhaka",
            duration: "Oct 2021 – Nov 2023",
            details: [
                "Built a University Portal for Career Counseling, Alumni Networking & Job Placement, serving 200K+ students.",
                "Developed a secure system for Bangladesh Fire Service & Civil Defence, improving public accessibility.",
                "Optimized and debugged existing systems, improving functionality and efficiency by 25%."
            ]
        },
        {
            role: "Web Developer",
            company: "Creative System, Dhaka",
            duration: "Apr 2021 – Sep 2021",
            details: [
                "Enhanced existing projects by adding new features and improving system performance."
            ]
        }
    ];

    return (
        <>
            <div name="Resume" className="container max-w-screen-2xl mx-auto px-4 md:px-48 text-white">
                <div className="md:py-24 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase text-white md:mb-20 mb-10 text-center">
                        Resume
                        <span className="block h-1 bg-cyan-500 w-24 mt-2 mx-auto"></span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Left Column */}
                        <div className="relative space-y-10">
                            {/* Summary */}
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-cyan-500">Summary</h3>

                                <div className="relative pl-5 mt-4">
                                    {/* Custom Border with short top-bottom */}
                                    <div className="absolute left-1 top-2 bottom-2 w-0.5 bg-cyan-500"></div>

                                    {/* Circle on the line */}
                                    <div className="absolute -left-[5px] top-1 w-5 h-5 rounded-full bg-cyan-500"></div>

                                    <div className="ml-2">
                                        <h4 className="text-xl font-semibold">Shohel Rana</h4>
                                        <p className="text-gray-300 italic">
                                        Results-driven Software Engineer with 3+ years of experience in backend development, API design and database optimization. Eager to contribute to the company's growth by applying problem-solving and teamwork skills.
                                        </p>
                                        <ul className="list-disc pl-5 mt-2 text-gray-400">
                                            <li>Dhaka, Bangladesh</li>
                                            <li>+8801723559950</li>
                                            <li>gsshohel1314@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <h3 className="text-2xl font-bold text-cyan-500">Education</h3>

                                <div className="relative pl-5 mt-4">
                                    {/* Custom Border with short top-bottom */}
                                    <div className="absolute left-1 top-2 bottom-2 w-0.5 bg-cyan-500"></div>

                                    {/* Circle on the line */}
                                    <div className="absolute -left-[5px] top-1 w-5 h-5 rounded-full bg-cyan-500"></div>

                                    <div className="ml-2">
                                        <h4 className="text-xl font-semibold">B.Sc. (Hons) in Software Engineering</h4>
                                        <h5 className="text-sm text-gray-400">Aug 2015 – Dec 2019</h5>
                                        <p className="text-gray-300 italic">
                                            Daffodil International University
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="relative space-y-10">
                            {/* Experience */}
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-cyan-500">Professional Experience</h3>

                                <div className="relative pl-8 mt-4">
                                    {/* Custom Border with short top-bottom */} 
                                    <div className="absolute left-1 top-2 bottom-2 w-0.5 bg-cyan-500"></div>

                                    {
                                        experiences.map((exp, index) => (
                                            <div
                                                key={index}
                                                // className="relative mb-6"
                                                className={`relative ${index !== experiences.length - 1 ? 'mb-6' : ''}`}
                                            >
                                                {/* Circle on the line */}
                                                <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-cyan-500"></div>
            
                                                <h4 className="text-xl font-semibold">{exp.role}</h4>
                                                <h5 className="text-sm text-gray-400">{exp.duration}</h5>
                                                <p className="italic text-gray-300">{exp.company}</p>
                                                <ul className="list-disc pl-5 text-gray-400">
                                                    {
                                                        exp.details.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;