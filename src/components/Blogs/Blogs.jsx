import React from "react";
import Blog1 from "../../assets/Blogs/1.jpg";
import Blog2 from "../../assets/Blogs/2.jpg";
import Blog3 from "../../assets/Blogs/3.jpg";
import Blog4 from "../../assets/Blogs/4.jpg";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
  {
    id: 1,
    title: "The Science Behind Acidic Drinks and Their Impact on Health",
    desc: "Acidic drinks, like sodas and citrus juices, can erode tooth enamel and cause acid reflux. Learn how to enjoy these beverages while minimizing their harmful effects.",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "Top 5 Acidic Beverages You Should Limit in Your Diet",
    desc: "From energy drinks to lemon water, explore which popular acidic beverages could be causing health issues and why moderation is key.",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "How to Balance the pH in Your Diet with Acidic Drinks",
    desc: "Balancing acidic and alkaline foods in your diet is crucial for overall health. Discover how to manage your pH levels while still enjoying your favorite drinks.",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "Are Acidic Drinks Really Bad for Your Teeth?",
    desc: "Dental professionals weigh in on how acidic beverages like coffee and sodas can contribute to tooth decay and ways to protect your enamel.",
    link: "#",
    img: Blog4,
  },
];

const Blogs = () => {
  return (
    <section id="Blog" className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center pb-8">Blogs</h1>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BlogsData.map((item) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,
              }}
            >
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-6 p-2 md:p-5
               max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
              >
                <img src={item.img} alt="" />
                <div className="space-y-2">
                  <h1 className="text-xl font-bold line-clamp-2">
                    {item.title}
                  </h1>
                  <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
