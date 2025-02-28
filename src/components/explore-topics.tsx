// components/ExploreTopics.tsx
import React from 'react';
import Image from 'next/image';
import nextConfig from '../../next.config';

interface Topic {
    title: string;
    description: string;
    articles: {
        image: string;
        alt: string;
        title: string;
        description: string;
    }[];
}

const topics: Topic[] = [
    {
        title: 'Company News',
        description: 'Keep up with the latest happenings at Dassault Systèmes',
        articles: [
            {
                image: nextConfig.basePath + '/images/insights/img1.jpg',
                alt: 'Engineering',
                title: 'Revolutionizing Process Engineering',
                description: 'Imagine this: You’re a process engineer at ...',
            },
            {
                image: nextConfig.basePath + '/images/insights/img2.jpg',
                alt: 'Workforce',
                title: 'Enabling Workforce Of The Future with',
                description: 'Today’s world is changing rapidly, and the ...',
            },
            {
                image: nextConfig.basePath + '/images/insights/img3.jpg',
                alt: 'AI',
                title: '11 real ways AI is transforming',
                description: 'From earlier diagnosis to tailored treatments to precision surgery ...',
            },
        ],
    },
    {
        title: 'Design & Simulation',
        description:
            'Today’s challenges are being met with innovative design and manufacturing and improve through simulation.',
        articles: [
            {
                image: nextConfig.basePath + '/images/insights/img4.jpg',
                alt: 'Engineering',
                title: 'Revolutionizing Process Engineering',
                description: 'Imagine this: You’re a process engineer at ...',
            },
            {
                image: nextConfig.basePath + '/images/insights/img5.jpg',
                alt: 'Simulation',
                title: 'GPU-powered CFD Simulation',
                description: 'Gearbox manufacturers face complex design and engineering challenges ...',
            },
            {
                image: nextConfig.basePath + '/images/insights/img6.jpg',
                alt: 'Workforce',
                title: 'Enabling Workforce Of The Future with',
                description: 'Today’s world is changing rapidly, and the ...',
            },
        ],
    },
];

const ExploreTopics: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center text-black">Explore our topics</h1>
            <p className="text-center mb-8 text-black">
                Discover stories on key trends that are transforming the business and social landscape
            </p>

            {topics.map((topic, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">{topic.title}</h2>
                    <p className="mb-2 text-black">{topic.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {topic.articles.map((article, idx) => (
                            <div key={idx} className="bg-white p-4 rounded shadow">
                                <Image
                                    src={nextConfig.basePath + article.image}
                                    alt={article.alt}
                                    width={400}
                                    height={200}
                                    layout="responsive"
                                    objectFit="cover"
                                    className="mb-4"
                                />
                                <h3 className="text-xl font-semibold text-black">{article.title}</h3>
                                <p className="text-black">{article.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-color3 font-bold">See all articles</a>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default ExploreTopics;
