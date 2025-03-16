// components/TestimonialSection.tsx
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: '"BricsCAD\'s software is an ideal replacement for our previous CAD software."',
    author: 'Andy Group Manager of Product and Management, Strabag SE',
    company: 'STRABAG',
  },
  {
    text: '"BricsCAD offers licenses at a reasonable price and yet has the same functionality and stability as our previous CAD software."',
    author: 'Masahiro Abe, Production Engineering Division, Mazda, Japan',
    company: 'Mazda',
  },
  {
    text: '"BricsCAD is a good product and a good fit for many of our users working with CAD drawings - especially for our international users."',
    author: 'Daniels Matzke, Production Conception and Management, Strabag SE',
    company: 'STRABAG',
  },
  {
    text: '"On the data side, it has full compatibility with previously used software."',
    author: 'Davide Vinci, 3D Model & Design Specialist, Ponterosso Comunic',
    company: 'Ponterosso Comunic',
  },
];

interface TestimonialSectionProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const TestimonialSection = ({ containerRef }: TestimonialSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full p-4"
            style={{ minWidth: `100%` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              x: currentIndex === index ? 0 : 100,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-800">{testimonial.text}</p>
              <p className="mt-4 text-sm text-gray-600">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const RatingSection = () => {
  return (
    <div className="flex justify-center items-center mb-8">
      <Image src="/path-to-your-svg.svg" alt="Rating" width={300} height={100} />
    </div>
  );
};

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto p-8">
      <RatingSection />
      <TestimonialSection containerRef={containerRef} />
    </div>
  );
};

export default Testimonials;
