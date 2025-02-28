import React from "react";
import Image from "next/image";
import nextConfig from "../../next.config";

interface BlogCardProps {
    title: string;
    blogUrl: string;
    followUrl: string;
    imageUrl: string;
    description: string;
    followers: number;
    frequency: string;
    domainAuthority: number;
    email?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    title,
    blogUrl,
    imageUrl,
    description,
    followers,
    frequency,
    domainAuthority,
    email,
}) => {
    return (
        <div className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-md gap-4 w-full">
            <div className="relative w-20 h-20">
                <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="text-sm text-gray-600">
                    <strong>Blog</strong>{" "}
                    <a href={blogUrl} className="text-blue-500 hover:underline">
                        {blogUrl}
                    </a>
                    <button className="ml-2 bg-color3 text-white px-2 py-1 text-xs rounded">
                        {"+ Follow Blog"}
                    </button>
                </p>
                <p className="text-gray-700 text-sm mt-2">{description}</p>
                <p className="text-gray-600 text-sm mt-2">
                    <strong>Twitter Followers:</strong> {followers} · <strong>Frequency:</strong> {frequency} ·{" "}
                    <strong>Domain Authority:</strong> {domainAuthority}
                </p>
                {email && (
                    <p className="text-gray-600 text-sm">
                        <strong>Email:</strong> {email}
                    </p>
                )}
                <div className="mt-3 flex gap-2">
                    <button className="bg-color3 text-white px-4 py-2 rounded text-sm">
                        📖 Read Now
                    </button>
                    <button className="border border-gray-400 px-4 py-2 rounded text-sm text-black">
                        <Image
                            src={nextConfig.basePath + "/icons/mail.png"}
                            alt="Get Email Contact"
                            width={16}
                            height={16}
                            className="inline-block mr-2"
                        />
                        Get Email Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

const BlogList = () => {
    const blogs = [
        {
            title: "Best CAD Tips",
            blogUrl: "https://bestcadtips.com/",
            followUrl: "#",
            imageUrl: "https://i.pravatar.cc/400?img=65", // Dummy image
            description:
                "Best CAD Tips is your source for real-world-tested CAD tips for CAD/BIM/Revit users. Whether you're a beginner or an experienced professional, this blog offers practical advice, tutorials, and industry insights to help improve your workflow and efficiency. Stay updated with the latest trends, software updates, and best practices in CAD and BIM modeling.",
            followers: 196,
            frequency: "1 post/quarter",
            domainAuthority: 23,
        },
        {
            title: "Designair Space",
            blogUrl: "https://www.designairspace.com/blogs/read-more",
            followUrl: "#",
            imageUrl: "https://i.pravatar.cc/400?img=44", // Dummy image
            description:
                "We're on a mission to cut the cord that chains engineers and designers to CAD workstations. Designair Space explores cloud-based CAD solutions, remote collaboration tools, and innovations that empower designers to work efficiently from anywhere. Our blog provides insights on digital transformation in engineering, software reviews, and expert recommendations for cloud-based workflows.",
            followers: 26,
            frequency: "5 posts/year",
            domainAuthority: 17,
            email: "****@designairspace.com",
        },
        {
            title: "CAD Trends Weekly",
            blogUrl: "https://www.cadtrendsweekly.com/",
            followUrl: "#",
            imageUrl: "https://i.pravatar.cc/400?img=12", // Dummy image
            description:
                "CAD Trends Weekly brings you the most up-to-date news and trends in the world of computer-aided design. Our blog covers a wide range of topics, including emerging technologies, software updates, interviews with industry experts, and innovative design techniques. Perfect for CAD professionals looking to stay ahead of the curve and enhance their skills with cutting-edge information.",
            followers: 452,
            frequency: "2 posts/month",
            domainAuthority: 30,
            email: "contact@cadtrendsweekly.com",
        }
    ];


    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-center text-2xl font-bold my-4 text-black">Blog</h2>
            <div className="space-y-6">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
