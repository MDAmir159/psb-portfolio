// components/FAQ.tsx
import { useState } from "react";

const faqs = [
    {
        question: "What is CAD?",
        answer: "CAD stands for Computer-Aided Design, used for creating precise drawings and technical illustrations.",
    },
    {
        question: "Who uses CAD software?",
        answer: "CAD drawings are used by architects, civil engineers, mechanical engineers, and construction professionals.",
    },
    {
        question: "Types of CAD drawings",
        answer: "Common CAD drawings include 2D drafting, 3D modeling, and parametric designs.",
    },
    {
        question: "Is CAD hard to learn?",
        answer: "CAD can be complex, but with practice and the right tools, it becomes easier to use effectively.",
    },
    {
        question: "Does PSB import Visio files?",
        answer: "Yes, PSB supports importing Microsoft Visio files.",
    },
    {
        question: "What is the best CAD software?",
        answer: "Popular CAD software includes AutoCAD, SolidWorks, Fusion 360, and CATIA.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-10">
                <h2 className="text-4xl font-semibold text-center mb-6">
                    Frequently Asked Questions (FAQ) About CAD
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-full">
                            <button
                                className={`w-full text-left p-4 rounded-lg transition-colors flex justify-between items-center ${openIndex === index ? "bg-blue-900 text-white" : "bg-gradient-to-r from-blue-900 to-blue-400 text-white"
                                    }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="bg-white text-gray-700 p-4 border border-gray-200 rounded-lg mt-2">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
