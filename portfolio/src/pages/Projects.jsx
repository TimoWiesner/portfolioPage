import { useParams } from "react-router-dom";

const projects = {
  "1": {
    title: "Project One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, justo in elementum venenatis.",
    image: "https://via.placeholder.com/400",
    github: "https://github.com/yourusername/project-one",
  },
  "2": {
    title: "Project Two",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://via.placeholder.com/400",
    github: "https://github.com/yourusername/project-two",
  },
};

const Projects = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return <div className="text-center text-white mt-20">Project not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Left Side: Image */}
        <img src={project.image} alt={project.title} className="w-full md:w-1/2 rounded-lg shadow-md" />

        {/* Right Side: Description */}
        <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
          <p className="text-gray-300 text-lg">{project.description}</p>
        </div>
      </div>

      {/* GitHub Button */}
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Projects;
