import { DESKTOP_IMG, PEOPLE_IMG, TELEPHONE_IMG } from "@/utils/urls/images";
import Image from "next/image";
import Link from "next/link";

const SupportPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-color1 text-white py-16 text-center h-[50vh] flex items-center relative">
        <div className="w-[40%] ml-[15%] flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-start">Support</h1>
          <p className="text-lg text-start">
            We recognize the importance of fully operational software and solutions for your business. For urgent matters, please contact our team directly at (111) 111-2222, and we will promptly document and address your concerns.
          </p>
        </div>
      </div>

      {/* Support Options - Overlapping Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
        {/* Contact Support */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <Image src={DESKTOP_IMG} alt="Contact Support" width={60} height={60} className="mx-auto" />
          <h2 className="text-xl font-semibold mt-4 text-color2">EMAIL/WEB-BASED SUPPORT</h2>
          <p className="mt-2 text-gray-600">Need help? Reach out to our support team.</p>
          <Link href="/contact" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Support
          </Link>
        </div>

        {/* Knowledge Base */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <Image src={PEOPLE_IMG} alt="Onsite Support" width={60} height={60} className="mx-auto" />
          <h2 className="text-xl font-semibold mt-4 text-color2">Onsite Support</h2>
          <p className="mt-2 text-gray-600">Need help? Reach out to our support team.</p>
          <Link href="/contact" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Support
          </Link>
        </div>

        {/* Training & Webinars */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <Image src={TELEPHONE_IMG} alt="Training & Webinars" width={60} height={60} className="mx-auto" />
          <h2 className="text-xl font-semibold mt-4 text-color2">Training & Webinars</h2>
          <p className="mt-2 text-gray-600">Need help? Reach out to our support team.</p>
          <Link href="/contact" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Support
          </Link>
        </div>
      </div>
    </div>

  );
};

export default SupportPage;