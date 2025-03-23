import { useParams } from "react-router-dom";
import anatomyHeart from "../assets/anatomy-heart.jpg";
import ai_head from "../assets/ai-head.png";
import jobcenter from "../assets/jobcenterlübeck.png";
import game_board from "../assets/game-board.jpg";
import e_commerce from "../assets/e-commerce.png";
import image_segmentation from "../assets/image-segmentation.png";

const projects = {
  "1": {
    title: "Trainieren eines UNets zur Segmentierung von Herzstrukturen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, justo in elementum venenatis.",
    image: anatomyHeart,
    github: "https://github.com/yourusername/project-one",
  },
  "2": {
    title: "Entwicklung eines kognitiven Modells mit ACT-R",
    description: "Sed ut perspiciatis unde omnis iste natus",
    image: ai_head,
    github: "https://github.com/yourusername/project-two",
  },
  "3": {
    title: "Serious Game zur sozialen Notlage Arbeitslosigkeit",
    description: "Sed ut perspiciatis unde omnis iste natus",
    image: jobcenter,
    github: "https://github.com/yourusername/project-two",
  },
  "4": {
    title: "Brettspielrealisierung mit JavaFX Oberfläche",
    description: "Sed ut perspiciatis unde omnis iste natus",
    image: game_board,
    github: "https://github.com/yourusername/project-two",
  },
  "5": {
    title: "E-Commerce-Website mit Stripe und Content-Manager",
    description: "Sed ut perspiciatis unde omnis iste natus",
    image: e_commerce,
    github: "none",
  },
  "6": {
    title: "Startup Bildsegmentierungs-App",
    description: "Sed ut perspiciatis unde omnis iste natus",
    image: image_segmentation,
    github: "none"
  }
};

const Projects = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return <div className="text-center text-black mt-20">Project not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 mt-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Left Side: Image */}
        <img src={project.image} alt={project.title} className="w-full md:w-1/2 rounded-lg shadow-md bg-white" />
        
        {/* Right Side: Description */}
        <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
          <p className="text-gray-300 text-lg">{project.description}</p>
        </div>
        </div>

        {project.github !== "none" && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            View on GitHub
          </a>
        )}
    </div>
  );
};

export default Projects;
