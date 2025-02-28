import BlogList from "@/components/blog-list";
import ExploreTopics from "@/components/explore-topics";
import SubscribeSection from "@/components/subscribe-section";

const InsightsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-color1 text-white py-16 text-center h-[50vh] flex items-center relative">
        <div className="w-[40%] ml-[15%] flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-start">Insights</h1>
          <p className="text-lg text-start">
            Explore our latest blogs, upcoming events, industry news, and webinars designed to keep you up-to-date with the CAD world and innovations. Check back regularly for fresh content!
          </p>
        </div>
      </div>
      <BlogList />
      <ExploreTopics />
      <SubscribeSection />
    </div>
  );
};

export default InsightsPage;