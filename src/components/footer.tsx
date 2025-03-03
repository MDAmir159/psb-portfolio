import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { getCurrentYear } from '@/utils/helpers';

function Footer() {
    return (
        <>
            <footer className="bg-white py-12">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 w-[80%]">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-5xl text-black">
                            Let’s <span className="text-yellow-500 font-bold">Connect</span> there
                        </h2>
                        <div className='flex gap-4 pt-5'>
                            <div className="flex items-center justify-center">
                                <Link href="/insights" passHref>
                                    <button className="flex items-center bg-secondary text-blue-600 text-2px rounded-full px-1 py-1 space-x-2 hover:bg-secondary">
                                        <span className="bg-primary text-tertiary_tx px-6 py-2 rounded-full">
                                            View All Blogs
                                        </span>
                                        <span className="bg-white text-green-900 p-2 rounded-full">
                                            {/* <Image src={usableImagePathGenerator("/icons/left_arrow.svg")} alt="View My CV" width={20} height={20} /> */}
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start space-y-8 md:space-y-0 py-10">
                        {/* Olivia Section */}
                        <div className="flex-1 space-y-4 px-6 ">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold text-black">
                                    {"PSB"}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                {"PSB Limited is a UK based, multi-disciplinary CAD Services. Our team of CAD Technicians/Engineers produce an array of different types of 2D CAD Drawings and 3D CAD Models to suit many industries and applications."}
                            </p>
                            {/* <div className="flex space-x-4">
                            {AppConfig.socialMedia.map(
                                (item, index) => {
                                    return (
                                        <div
                                            key={index}
                                        >
                                            <Link href={item?.link}>
                                                <Image
                                                    key={item?.icon}
                                                    src={usableImagePathGenerator(item?.icon)}
                                                    alt={item?.name}
                                                    width={40}
                                                    height={40}
                                                />
                                            </Link>
                                        </div>
                                    )
                                }
                            )}
                        </div> */}
                        </div>

                        {/* Contact */}
                        <div className='flex justify-center align-center'>
                            <div className="px-6">
                                <h4 className="font-bold text-black text-2xl">Contact</h4>
                                <ul className="mt-6 space-y-2 text-gray-600">
                                    <li>{"support@psb.com"}</li>
                                    <li>{"+91817236213"}</li>
                                    <li>{"27 NEWQUAY DRIVE, BRAMHALL, STOCKPORT , SK7 2HT"}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Subscription */}
                        <div className="flex-1">
                            <h4 className="font-bold text-secondary text-black text-2xl">
                                Get the latest information
                            </h4>
                            <div className="mt-4 flex">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                                <button className="bg-green-900 text-white px-6 rounded-r-md hover:bg-green-800 transition">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="w-full h-16 bg-primary flex justify-center">
                <div className="w-[80%] flex flex-row justify-between items-center">
                    <div className="text-tertiary_text">
                        Copyright &copy; {getCurrentYear()} <span className="text-secondary"> PSB.</span> All Rights Reserved
                    </div>
                    <div className="text-tertiary_text">User Terms and Conditions | Privacy Policy</div>
                </div>
            </footer>
        </>
    );
}

export default Footer;