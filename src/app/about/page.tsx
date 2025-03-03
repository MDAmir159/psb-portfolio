'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 23.8103, // Set your latitude here (e.g., Dhaka, Bangladesh)
    lng: 90.4125, // Set your longitude here (e.g., Dhaka, Bangladesh)
};

const AboutUs = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust the scroll threshold as needed
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleSmoothScroll = (event: Event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                event.preventDefault();
                const section = document.querySelector(target.getAttribute('href')!);
                section?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <div className="font-sans bg-white">
            {/* Local Navbar for Section Navigation */}
            <div className={`sticky top-16 w-full bg-white shadow-md z-30 ${isScrolled ? 'top-0' : ''}`}>
                <div className="container mx-auto flex justify-end space-x-6 px-6 py-4">
                    <Link href="#company" className="text-gray-700 hover:text-blue-600">Company</Link>
                    <Link href="#mission" className="text-gray-700 hover:text-blue-600">Our Mission</Link>
                    <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                </div>
            </div>
            {/* About Us Section */}
            <div className="bg-color1 text-white py-16 text-center h-[50vh] flex items-center relative">
                <div className="w-[40%] ml-[15%] flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-start">About</h1>
                    <p className="text-lg text-start">
                        We provide expert CAD solutions, from detailed 2D drawings to advanced 3D models, ensuring precision and consistency for various engineering and design applications. Our team of skilled CAD technicians and engineers delivers cutting-edge design solutions, helping industries streamline their processes with accuracy and reliability.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 pt-32 space-y-16">

                {/* Company Section */}
                <section id="company" className="pt-16">
                    <h2 className="text-3xl font-semibold text-black">Company</h2>
                    <p className="mt-4 text-gray-600">PSB Limited is a leading UK-based company specializing in multi-disciplinary CAD services. We cater to a diverse range of industries, providing high-quality technical drawings and models to support various applications. Our expertise spans across different sectors, ensuring precise and industry-specific solutions.</p>
                    <h3 className="mt-8 text-2xl font-semibold text-black">Expert CAD Technicians and Engineers</h3>
                    <p className="mt-4 text-gray-600">Our team consists of highly skilled CAD technicians and engineers with extensive experience in 2D and 3D design. They work collaboratively to deliver accurate and detailed CAD solutions tailored to each client’s unique needs. By leveraging the latest software and industry best practices, we ensure efficiency and precision in every project.</p>

                    <h3 className="mt-8 text-2xl font-semibold text-black">Comprehensive 2D CAD Drawings</h3>
                    <p className="mt-4 text-gray-600">We produce a wide range of 2D CAD drawings, including architectural plans, mechanical schematics, electrical layouts, and more. Our meticulous attention to detail ensures that every drawing meets industry standards and client specifications. These drawings serve as the foundation for engineering, construction, and manufacturing projects.</p>

                    <h3 className="mt-8 text-2xl font-semibold text-black">High-Quality 3D CAD Models</h3>
                    <p className="mt-4 text-gray-600">Our 3D CAD modeling services bring concepts to life with detailed, realistic visualizations. We create parametric, solid, and surface models for various applications, including product design, engineering simulations, and virtual prototypes. Our 3D models enhance design accuracy, enabling better decision-making and improved project outcomes.</p>

                    <h3 className="mt-8 text-2xl font-semibold text-black">Tailored Solutions for Every Industry</h3>
                    <p className="mt-4 text-gray-600">PSB Limited serves multiple industries, including architecture, engineering, manufacturing, construction, and product design. We customize our CAD services to align with each industry’s unique requirements, ensuring optimal results and seamless integration with existing workflows. By combining technical expertise with a commitment to quality and efficiency, PSB Limited is a trusted partner for all CAD design and drafting needs.</p>
                </section>

                {/* Our Mission Section */}
                <section id="mission" className="pt-16">
                    <h2 className="text-3xl font-semibold text-black">Our Mission</h2>
                    <p className="mt-4 text-gray-600">Consistent Quality</p>
                    <p className="mt-4 text-gray-600">We prioritize delivering consistently high-quality results to our clients. Our team follows well-defined workflows and quality control measures to ensure that every project meets the same rigorous standards...</p>

                    <p className="mt-8 text-gray-600">Regular Communication</p>
                    <p className="mt-4 text-gray-600">We believe that open and proactive communication is essential for project success. Rather than making assumptions, we engage with our clients through calls, emails, and screen-sharing sessions...</p>

                    <p className="mt-8 text-gray-600">Timely Delivery</p>
                    <p className="mt-4 text-gray-600">We understand the importance of meeting deadlines and ensuring timely project completion. As a well-structured team, we efficiently distribute our workload to optimize productivity...</p>

                    <p className="mt-8 text-gray-600">Excellent Processes</p>
                    <p className="mt-4 text-gray-600">Well-defined processes are the foundation of successful CAD outsourcing. Our approach is built on structured workflows that streamline project execution...</p>
                </section>

                {/* Contact Section */}
                <section id="contact" className="pt-16">
                    <h2 className="text-3xl font-semibold text-black">Contact</h2>
                    <p className="mt-4 text-gray-600">Address with “World Map”</p>

                    {/* Google Map */}
                    <div className="mt-8">
                        <LoadScript googleMapsApiKey="AIzaSyBI_Xoj9729igS90-85JBpMmUoVkDsMIrg">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={12}
                            >
                                {/* You can add markers here */}
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
