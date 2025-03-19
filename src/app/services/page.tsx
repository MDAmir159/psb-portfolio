"use client"
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import nextConfig from '../../../next.config';
import { motion } from "framer-motion";
import Image from 'next/image';

const sections = [
    {
        title: "2D CAD Drafting Services",
        description:
            "Our 2D CAD drafting services provide precise, high-quality technical drawings tailored to your project requirements. Whether you need architectural plans, mechanical schematics, electrical layouts, or civil engineering drawings, our expert drafters ensure accuracy and efficiency using industry-leading CAD software like AutoCAD.",
        image: "/images/service/1.png",
    },
    {
        title: "3D/ Revit BIM Modelling",
        description:
            "Our 3D/Revit BIM Modelling services provide precise and intelligent digital representations of building structures, enhancing collaboration and decision-making throughout the project lifecycle. We utilize the latest BIM technologies to create highly detailed and information-rich models that streamline design, construction, and facility management processes.",
        image: "/images/service/2.jpg",
    },
    {
        title: "As-built drawing and modeling",
        description:
            "Our As-Built Drawing and Modeling services provide accurate and up-to-date representations of a structure as it exists after construction. These detailed drawings and models help in facility management, renovations, and future expansions by reflecting modifications made during the building process.",
        image: "/images/service/3.jpg",
    },
    {
        title: "Bill of Material generation",
        description:
            "Efficient project planning and execution begin with a well-structured Bill of Material (BOM). Our BOM generation services provide a detailed, organized list of all components, materials, and assemblies required for your project.",
        image: "/images/service/4.jpg",
    },
    {
        title: "Field Survey data digitalization",
        description:
            "Accurate field survey data is crucial for seamless project execution, and our Field Survey Data Digitalization services ensure that raw survey data is efficiently converted into precise digital formats. We utilize advanced CAD and GIS technologies to transform traditional survey records, site measurements, and field notes into structured, easily accessible digital assets.",
        image: "/images/service/5.png",
    },
    {
        title: "Facilities management data integration",
        description:
            "Seamless facility operations require accurate and accessible data. Our Facilities Management Data Integration service ensures that all critical building information—floor plans, asset data, maintenance schedules, and sensor-based monitoring—is efficiently consolidated into a centralized system.",
        image: "/images/service/6.jpg",
    },
    {
        title: "Highway Drawing Drafting",
        description:
            "Our Highway Drawing Drafting services ensure precision and compliance with industry standards, helping engineers, contractors, and government agencies develop accurate and detailed highway plans. We specialize in creating comprehensive drawings that cover all aspects of highway design, from alignment and grading to signage and pavement markings.",
        image: "/images/service/7.png",
    },
];

const tabs = [
    {
        id: "pre-design",
        phaseNumber: 1,
        label: "Pre-design",
        content: "With more support for common file formats than any other BIM software, Vectorworks Architect can pull together all necessary information to start your project, providing everything you need for conceptual design, site planning, and analysis all in one interface. Quickly confirm design intent while transitioning from massing models to concept models.",
        videoSrc: "/videos/service/001.webm"
    },
    {
        id: "schematic",
        phaseNumber: 2,
        label: "Schematic Design",
        content: "With more support for common file formats than any other BIM software, Vectorworks Architect can pull together all necessary information to start your project, providing everything you need for conceptual design, site planning, and analysis all in one interface. Quickly confirm design intent while transitioning from massing models to concept models.",
        videoSrc: "/videos/service/002.webm"
    },
    {
        id: "development",
        phaseNumber: 3,
        label: "Design Development",
        content: "As project detail increases, Vectorworks Architect facilitates smooth consultant coordination and aids cost estimation — all while refining design decisions. Intelligent information modeling keeps data exactly where you need it and ensures painless data reporting.",
        videoSrc: "/videos/service/003.webm"
    },
    {
        id: "construction",
        phaseNumber: 4,
        label: "Construction Documentation",
        content: "Using 3D data-driven design tools from project inception maintains model quality while making construction documentation a breeze. Vectorworks Architect's BIM tools means updates to your model automatically updates documentation.",
        videoSrc: "/videos/service/004.webm"
    },
];

function ServicePage() {

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const fadeInFromSide = (direction: "left" | "right") => ({
        hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    });

    return (
        <>
            <Navbar />
            <div
                className="text-white py-16 text-center h-[50vh] flex items-center relative bg-cover bg-center"
                style={{ backgroundImage: `url(${nextConfig.basePath + '/images/service/service_banner.png'})` }}
            >
                <div className="w-[40%] ml-[15%] flex flex-col gap-4 bg-black/50 p-6 rounded-md">
                    <h1 className="text-4xl font-bold text-start">Services</h1>
                    <p className="text-lg text-start">
                        We understand the critical role that fully operational software and seamless solutions play in your business. Our dedicated team is committed to ensuring that your systems function smoothly at all times. With our expertise and swift response, we minimize downtime and keep your operations running efficiently.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center p-16">
                <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
                    <div>
                        <h2 className="text-3xl font-bold">BIM SOFTWARE FOR EVERY DESIGN PHASE</h2>
                        <h3 className="mt-4 text-xl font-semibold">Phase-{selectedTab.phaseNumber} : {selectedTab.label}</h3>
                        <p className="mt-2 text-gray-600">{selectedTab.content}</p>
                    </div>
                    <div>
                        <video key={selectedTab.videoSrc} className="w-full border" controls={false} autoPlay>
                            <source src={`${nextConfig.basePath}${selectedTab.videoSrc}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="mt-8 flex border-2 border-black w-full max-w-6xl rounded-[30px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`flex-1 py-3 text-center border-r last:border-r-0
                                transition-all duration-3000 ease-in-out
                            ${selectedTab.id === tab.id ? "bg-teal-500 text-white" : "bg-white text-black"}
                            ${tab.id === tabs[0].id ? "rounded-l-[30px]" : ""}
                            ${tab.id === tabs[tabs.length - 1].id ? "rounded-r-[30px]" : ""}`
                            }
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Service Sections */}
            <div className="py-16 space-y-16">
                {sections.map((section, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`flex items-center justify-between max-w-6xl mx-auto ${isEven ? "flex-row" : "flex-row-reverse"
                                }`}
                        >
                            {/* Text Section */}
                            <motion.div
                                className="w-[45%] flex flex-col gap-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInFromSide(isEven ? "left" : "right")}
                            >
                                <h2 className="text-3xl font-bold">{section.title}</h2>
                                <p className="text-lg text-gray-600">{section.description}</p>
                            </motion.div>

                            {/* Image Section */}
                            <motion.div
                                className="w-[45%]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInFromSide(isEven ? "right" : "left")}
                            >
                                <Image
                                    src={`${nextConfig.basePath}${section.image}`}
                                    alt={section.title}
                                    width={500} // specify the width
                                    height={300} // specify the height
                                    className="w-full h-auto rounded-lg shadow-xl shadow-black/50"
                                />

                            </motion.div>
                        </div>
                    );
                })}
            </div>;

        </>
    )
}

export default ServicePage;