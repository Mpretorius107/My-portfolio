import React from "react";
import Movie from '../assets/Movie.png';
import Kream from '../assets/kream.png';  
import Diamond from '../assets/Diamond.png';
const projects = [
  {
    id: 1,
    image:  Movie,
    title: "Menu-project",
    description: "Movie-online-rental",
    link: "https://menu-project-self.vercel.app/",
  },
  {
    id: 2,
    image: Kream,
    title: "Kream-resturant",
    description: "Restaurant-website",
    link: "https://kream-restaurant-project.vercel.app/",
  },
  {
    id: 3,
    image: Diamond,
    title: "diamond-tech",
    description: "Tech company project.",
    link: "https://diamond-tech-project.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-m-20 bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Projects
          </h2>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            my current Work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, image, title, description, link }) => (
            <div
              key={id}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="h-48 mb-4 bg-gray-200 flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover rounded-md"
                  />
                ) : (
                  <span className="text-gray-500">Image Placeholder</span>
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {title}
              </h3>
              <p className="text-gray-700 mb-4">{description}</p>
              <a
                href={link}
                className="text-sky-600 hover:underline font-medium"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
