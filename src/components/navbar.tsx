"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LOGO_URL } from "@/utils/urls/images";
import nextConfig from "../../next.config";

const navBarItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Insights", route: "/insights" },
    { name: "Support", route: "/support" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [currentPath, setCurrentPath] = useState(""); // To track the current route

    useEffect(() => {
        // Update the currentPath state on route change
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md">
            {/* Logo */}
            <Image src={LOGO_URL} alt="Vushki Logo" height={30} width={80} />

            {/* Mobile Menu Button */}
            <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation Links */}
            <ul className={`md:flex space-x-6 text-gray-700 text-[20px] absolute md:static top-16 left-0 w-full bg-white shadow-md md:shadow-none md:w-auto md:flex-row flex-col items-center ${isOpen ? "flex" : "hidden"}`}>
                {
                    navBarItems.map((item, index) => (
                        <li key={index} className="py-2 md:py-0">
                            <Link
                                href={item.route}
                                className={`hover:text-gray-900 ${currentPath === nextConfig.basePath + item.route ? "font-bold border-b-2 border-black pb-1" : ""}`}
                            >
                                <b>{item.name}</b>
                            </Link>

                        </li>
                    ))
                }
            </ul>

            {/* Request Demo Button */}
            <button className="hidden md:block px-4 py-2 bg-color3 text-white rounded-lg hover:bg-blue-700">
                <b>Request A Demo</b>
            </button>
        </nav>
    );
};

export default Navbar;