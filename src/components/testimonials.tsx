import Image from "next/image";

const testimonials = [
  {
    name: "Jeremy M.",
    role: "Director of IT - Mining & Metals",
    title: "Great Visio Replacement",
    date: "01/29/2018",
    rating: 5,
    review:
      "It's so easy to use and has so many options to pick from. Even does some project Gantt style charting.",
    avatar: "https://i.pravatar.cc/400?img=65",
  },
  {
    name: "Shawn B.",
    role: "Head of School - Education",
    title: "Satisfied Customer",
    date: "02/10/2025",
    rating: 5,
    review:
      "Love the templates that make it easy to get a project going quickly and easily.",
    avatar: "https://i.pravatar.cc/400?img=67",
  },
  {
    name: "Sophia R.",
    role: "Project Manager - Software Development",
    title: "Amazing tool for teams",
    date: "06/15/2022",
    rating: 4.5,
    review:
      "The collaboration features are fantastic. My team and I can work on the same document in real-time.",
    avatar: "https://i.pravatar.cc/400?img=45",
  },
  {
    name: "David L.",
    role: "Freelance Graphic Designer",
    title: "Perfect for design workflows",
    date: "09/05/2021",
    rating: 4,
    review:
      "A great tool for sketching out wireframes and workflows. Would love to see more customization options.",
    avatar: "https://i.pravatar.cc/400?img=1",
  },
  {
    name: "Emily W.",
    role: "Marketing Coordinator",
    title: "Saves me so much time!",
    date: "11/22/2023",
    rating: 5,
    review:
      "The drag-and-drop interface is incredibly intuitive. I can create presentations and diagrams effortlessly.",
    avatar: "https://i.pravatar.cc/400?img=24",
  },
  {
    name: "Michael T.",
    role: "CTO - Tech Startup",
    title: "Great for technical diagrams",
    date: "04/12/2020",
    rating: 4.8,
    review:
      "The integration with our existing tools made the transition smooth. Great for system architecture diagrams.",
    avatar: "https://i.pravatar.cc/400?img=4",
  },
  {
    name: "Olivia H.",
    role: "Business Analyst - Finance",
    title: "Very useful for process mapping",
    date: "08/03/2019",
    rating: 4.3,
    review:
      "I use it daily to map out business processes. It helps visualize workflows clearly.",
    avatar: "https://i.pravatar.cc/400?img=5",
  },
  {
    name: "James K.",
    role: "Engineering Manager",
    title: "Solid alternative to expensive software",
    date: "05/18/2024",
    rating: 4.7,
    review:
      "This has replaced our need for costly software. The feature set is rich, and it's improving continuously.",
    avatar: "https://i.pravatar.cc/400?img=12",
  },
];


const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border mb-4">
    <div className="flex items-center gap-4 mb-4">
      <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-bold text-lg text-start">{testimonial.name}</h3>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
    <h4 className="font-semibold text-blue-600 mb-1 text-start">{testimonial.title}</h4>
    <p className="text-xs text-gray-500 mb-2 text-start">{testimonial.date}</p>
    <div className="flex mb-2">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <span key={i} className="text-red-500">★</span>
      ))}
    </div>
    <p className="text-gray-700">"{testimonial.review}"</p>
    <a href="#" className="text-blue-500 text-sm mt-2 block">
      Read the full SmartDraw review
    </a>
  </div>
);

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-6">Trusted by Millions of Users</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
      </div>
      <div className="max-w-6xl mx-auto h-80 overflow-y-auto p-4 border rounded-lg">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}