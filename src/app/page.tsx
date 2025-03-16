"use client";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import nextConfig from "../../next.config";
import Image from "next/image";

const images = [
  '/images/home/img1.jpg',
  '/images/home/img2.jpg',
  '/images/home/img3.jpg',
  '/images/home/img4.jpg',
  '/images/home/img5.jpg',
];

const services = [
  {
    imgSrc: '/images/service/1.png',
    alt: '2D CAD Drafting Services',
    title: '2D CAD Drafting Services',
  },
  {
    imgSrc: '/images/service/2.jpg',
    alt: '3D/ Revit BIM Modelling',
    title: '3D/ Revit BIM Modelling',
  },
  {
    imgSrc: '/images/service/3.jpg',
    alt: 'As-built drawing and modeling',
    title: 'As-built drawing and modeling',
  },
  {
    imgSrc: '/images/service/4.jpg',
    alt: 'Bill of Material generation',
    title: 'Bill of Material generation',
  },
  {
    imgSrc: '/images/service/5.png',
    alt: 'Field Survey data digitalization',
    title: 'Field Survey data digitalization',
  },
  {
    imgSrc: '/images/service/6.jpg',
    alt: 'Facilities management data integration',
    title: 'Facilities management data integration',
  },
  {
    imgSrc: '/images/service/7.png',
    alt: 'Highway Drawing Drafting',
    title: 'Highway Drawing Drafting',
  },
  {
    imgSrc: '/images/service/8.jpg',
    alt: 'Field Survey',
    title: 'Field Survey data digitalisation',
  },
];

const whyUsItems = [
  {
    imgSrc: '/images/home/wu1.svg',
    alt: 'Online',
    title: 'Online',
    description: 'The core technology of AutoCAD in an online DWG editor and DWG viewer',
  },
  {
    imgSrc: '/images/home/wu2.svg',
    alt: 'Trusted',
    title: 'Trusted',
    description: "The AutoCAD web app is Autodesk’s official online CAD program",
  },
  {
    imgSrc: '/images/home/wu3.svg',
    alt: 'Connected',
    title: 'Connected',
    description: 'Draft with precision, speed, and confidence from anywhere',
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        <div
          className="text-white py-16 text-center h-[80vh] flex items-center relative bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: nextConfig.basePath + `url(${images[currentImageIndex]})` }}
        >
          <div className="w-[60%] ml-[15%] flex flex-col gap-4 p-6 rounded-md">
            <h1 className="text-6xl font-bold text-start">Welcome to PSB</h1>
            <p className="text-4xl text-start">
              Specializing in advanced CAD design and drafting solutions tailored to meet diverse industry needs in the United Kingdom
            </p>
          </div>
        </div>
        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 p-6 bg-black/50 text-white rounded-full text-3xl"
        >
          &lt;
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 p-6 bg-black/50 text-white rounded-full text-3xl"
        >
          &gt;
        </button>
      </div>
      <br /><br />
      {/* why us */}
      <div className="bg-gray-800 text-white py-10 w-full max-w-7xl mx-auto rounded-[35px]">
        <h1 className="text-4xl font-bold text-center mb-14">Why Us?</h1>
        <div className="flex flex-wrap justify-around">
          {whyUsItems.map((item, index) => (
            <div key={index} className="text-center mb-8 w-full sm:w-1/3">
              <Image
                src={nextConfig.basePath + item.imgSrc}
                alt={item.alt}
                className="mx-auto mb-4 h-[120px]"
                width={120} // specify the width for the image
                height={120} // specify the height for the image
              />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="px-9">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" py-10 w-full max-w-7xl mx-auto">
        <h1 className="font-bold text-center mb-10 text-gray-800">
          <span className="text-4xl">{'With our CAD Services'}</span> <br />
          <span className="text-3xl">{"We implement industrial design, patent, manufacturing, licensing and many more"}</span>
        </h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={nextConfig.basePath + service.imgSrc}
                alt={service.alt}
                className="mb-4"
                width={500} // specify the width for the image
                height={300} // specify the height for the image
              />
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
          ))}
        </div>

        <button className="hidden md:block px-4 py-2 bg-color3 text-white rounded-lg hover:bg-blue-700 mx-auto mt-10">
          <b>View All Services</b>
        </button>
      </div>
    </>
  );
}
