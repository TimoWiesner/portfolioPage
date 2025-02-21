import { Link } from "react-router-dom";

const projects = [
    { id: 1, title: "Project One", description: "This is a placeholder project.", link: "#" },
    { id: 2, title: "Project Two", description: "This is another placeholder project.", link: "#" },
    { id: 3, title: "Project Three", description: "More placeholder text.", link: "#" },
    { id: 4, title: "Project Four", description: "Yet another placeholder.", link: "#" },
    { id: 5, title: "Project Four", description: "Yet another placeholder.", link: "#" },
  ];

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          
          {/* Hero Section */}
          <div className="text-center mt-32">
            <h1 className="text-5xl font-bold">Your Name</h1>
            <p className="text-lg text-gray-300 mt-2">A passionate developer creating cool stuff.</p>
          </div>
    
          {/* Projects Section */}
          <div className="mt-20 w-full max-w-4xl px-4">
            <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 block text-white"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </Link>
        ))}
            </div>
          </div>
    
          {/* Contact Section (Sticky at the bottom) */}
          <div class="w-full bg-gray-800 py-4 mt-16 fixed bottom-0 text-center">
            <p>📧 Contact me: your.email@example.com</p>
            <p>💼 LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>
      );
    };
    
export default Home;
