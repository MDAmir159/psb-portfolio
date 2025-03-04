'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import nextConfig from '../../../next.config';
import Navbar from '@/components/navbar';

const containerStyle = { width: '100%', height: '400px' };
const center = { lat: 51.5074, lng: -0.1278 };

const AboutUs = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        if (window.scrollY > 100) setIsScrolled(true);
        else setIsScrolled(false);

        // Detect which section is in view
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = section.id;
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navbar />
            <div className="font-sans bg-white">
                {/* Navbar */}
                <div className={`sticky top-0 w-full bg-black shadow-md z-30 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
                    <div className="container mx-auto flex justify-end space-x-6 px-6">
                        {['company', 'mission', 'contact'].map((id) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={`px-4 py-2 rounded-md font-bold transition ${activeSection === id ? 'bg-color3 text-white' : 'text-white hover:bg-blue-600'
                                    }`}
                            >
                                {id === 'company' ? 'Company' : id === 'mission' ? 'Our Mission' : 'Contact'}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* About Us Section */}
                <div
                    className="text-white py-16 text-center h-[50vh] flex items-center relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${nextConfig.basePath}'/images/about/hero.jpg')` }}
                >
                    <div className="w-[40%] ml-[15%] flex flex-col gap-4 bg-black/50 p-6 rounded-md">
                        <h1 className="text-4xl font-bold text-start">About</h1>
                        <p className="text-lg text-start">
                            We provide expert CAD solutions, from detailed 2D drawings to advanced 3D models, ensuring precision and consistency for various engineering and design applications. Our team of skilled CAD technicians and engineers delivers cutting-edge design solutions, helping industries streamline their processes with accuracy and reliability.
                        </p>
                    </div>
                </div>


                {/* Content Sections */}
                <div className="container mx-auto px-6 pt-32 space-y-16">
                    <section id="company" className="pt-16">
                        <h2 className="text-3xl font-semibold text-black">Company</h2>
                        <h3 className="mt-8 text-2xl font-semibold text-black">Expert CAD Technicians and Engineers</h3>
                        <p className="mt-4 text-gray-600">Our team consists of highly skilled CAD technicians and engineers with extensive experience in 2D and 3D design. They work collaboratively to deliver accurate and detailed CAD solutions tailored to each client’s unique needs. By leveraging the latest software and industry best practices, we ensure efficiency and precision in every project.</p>
                        <h3 className="mt-8 text-2xl font-semibold text-black">Comprehensive 2D CAD Drawings</h3>
                        <p className="mt-4 text-gray-600">We produce a wide range of 2D CAD drawings, including architectural plans, mechanical schematics, electrical layouts, and more. Our meticulous attention to detail ensures that every drawing meet industry standard and client specification. These drawings serve as the foundation for engineering, construction, and manufacturing projects.</p>
                        <h3 className="mt-8 text-2xl font-semibold text-black">High-Quality 3D CAD Models</h3>
                        <p className="mt-4 text-gray-600">Our 3D CAD modeling services bring concepts to life with detailed, realistic visualizations. We create parametric, solid, and surface models for various applications, including product design, engineering simulations, and virtual prototypes. Our 3D models enhance design accuracy, enabling better decision-making and improved project outcomes.</p>
                        <h3 className="mt-8 text-2xl font-semibold text-black">Tailored Solutions for Every Industry</h3>
                        <p className="mt-4 text-gray-600">PSB Limited serves multiple industries, including architecture, engineering, manufacturing, construction, and product design. We customize our CAD services to align with each industry’s unique requirements, ensuring optimal results and seamless integration with existing workflows.</p>

                    </section>

                    <section id="mission" className="pt-16">
                        <h2 className="text-3xl font-semibold text-black">Our Mission</h2>
                        <h3 className="mt-8 text-2xl font-semibold text-black">Consistent Quality</h3>
                        <p className="mt-4 text-gray-600">We prioritize delivering consistently high-quality results to our clients. Our team follows well-defined workflows and quality control measures to ensure that every project meets the same rigorous standards. By maintaining structured processes, we eliminate inconsistencies and enhance reliability. Our commitment to quality means that clients can trust us to deliver work that aligns with their expectations every time. We continuously refine our methods to improve efficiency and precision. Regular audits and feedback loops help us identify and resolve potential issues early. Our team undergoes ongoing training to stay updated on industry best practices. We use the latest tools and technologies to ensure accuracy and excellence. By focusing on quality at every step, we build long-term partnerships based on trust and reliability.</p>
                        <h3 className="mt-8 text-2xl font-semibold text-black">Regular Communication</h3>
                        <p className="mt-4 text-gray-600">We believe that open and proactive communication is essential for project success. Rather than making assumptions, we engage with our clients through calls, emails, and screen-sharing sessions. This approach helps clarify requirements, address concerns, and ensure alignment at every stage of the project. By maintaining regular touchpoints, we minimize misunderstandings and enhance collaboration. We encourage feedback and actively listen to client input to refine our work. Our team remains accessible and responsive, fostering a smooth workflow. Clear communication also helps us adapt to any changes quickly and efficiently. Transparency is at the heart of our communication, ensuring that clients are always informed. We aim to build strong relationships through consistent and effective dialogue.</p>
                        <h3 className="mt-8 text-2xl font-semibold text-black">Timely Delivery</h3>
                        <p className="mt-4 text-gray-600">We understand the importance of meeting deadlines and ensuring timely project completion. As a well-structured team, we efficiently distribute our workload to optimize productivity. Every project is assigned a clear timeline with realistic lead times, allowing for effective planning. If any unforeseen factors arise that might impact delivery, we communicate them immediately. Our clients are kept informed of progress, ensuring they are never left in the dark. We use project management tools to track deadlines and allocate resources accordingly. Efficient scheduling and prioritization help us meet commitments without compromising quality. Our team is prepared to handle urgent requests with flexibility. By maintaining a disciplined approach to time management, we consistently deliver on our promises.</p>
                        <h3 className="mt-8 text-2xl font-semibold text-black">Excellent Processes</h3>
                        <p className="mt-4 text-gray-600">Well-defined processes are the foundation of successful CAD outsourcing. Our approach is built on structured workflows that streamline project execution. Each stage, from planning to final delivery, follows a systematic approach to minimize errors. Standardized procedures help maintain consistency across different projects and teams. Automation and software integration enhance efficiency and reduce manual workload. We continuously refine our processes based on feedback and industry advancements. Documentation and knowledge sharing ensure that our team operates seamlessly. Quality control checkpoints are embedded at key stages to catch and correct issues early. Our clients benefit from a structured yet flexible approach that adapts to their needs. Strong processes lead to better results, reduced risks, and higher client satisfaction.</p>

                    </section>

                    <section id="contact" className="pt-16">
                        <h2 className="text-3xl font-semibold text-black">Contact</h2>
                        <p className="mt-4 text-gray-600">Address with “World Map”</p>
                        <div className="mt-8">
                            <LoadScript googleMapsApiKey="AIzaSyBI_Xoj9729igS90-85JBpMmUoVkDsMIrg">
                                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                                    <Marker position={center} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
