import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import nextConfig from '../../next.config';

const counterInfoItems = [
    {
        imgSrc: '/images/home/c1.png',
        alt: 'Employees',
        title: 'Employees',
        numbers: 320,
        description: 'The core technology of AutoCAD in an online DWG editor and DWG viewer',
    },
    {
        imgSrc: '/images/home/c2.png',
        alt: 'Clients',
        title: 'Clients',
        numbers: 530,
        description: "The AutoCAD web app is Autodesk’s official online CAD program",
    },
    {
        imgSrc: '/images/home/c3.png',
        alt: 'Delivered Projects',
        title: 'Delivered Projects',
        numbers: 1006,
        description: 'Draft with precision, speed, and confidence from anywhere',
    },
];

const formatNumber = (num: number) => {
    return num % 100 === 0 ? num.toString() : `${Math.floor(num / 100) * 100}+`;
};

const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // Animation duration in ms
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Clamp between 0-1
            const nextValue = Math.floor(progress * target);
            setCount(nextValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

        return () => setCount(target);
    }, [target]);

    return <h1 className="text-4xl font-semibold text-black">{formatNumber(count)}</h1>;
};

function CounterInfo() {
    return (
        <div className="bg-white-800 text-white py-10 w-full mx-auto">
            <div className="flex flex-wrap justify-around">
                {counterInfoItems.map((item, index) => (
                    <div key={index} className="text-center mb-8 w-full sm:w-1/3">
                        <Image
                            src={nextConfig.basePath + item.imgSrc}
                            alt={item.alt}
                            className="mx-auto mb-4 h-[120px]"
                            width={120}
                            height={120}
                        />
                        <Counter target={item.numbers} />
                        <h2 className="text-xl font-semibold text-black">{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CounterInfo;
