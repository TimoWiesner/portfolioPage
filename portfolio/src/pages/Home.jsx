import { Link } from "react-router-dom";
import timo_wiesner from "../assets/timo-wiesner.png";

const projects = [
    { id: 1, title: "CT Bildsegmentierung", description: "Ein Projekt, bei dem ein UNet auf die Segmentierung von CT-Bildern trainiert wurde.", link: "#" },
    { id: 2, title: "Kognitive Modellierung", description: "Das Projekt zu meiner Bachelorarbeit.", link: "#" },
    { id: 3, title: "Serious Game", description: "Das Projekt zu meiner Tätigkeit als studentische Hilfskraft.", link: "#" },
    { id: 4, title: "Brettspiel Projekt", description: "Studentenprojekt zum Software Engineering Modul.", link: "#" },
    { id: 5, title: "E-Commerce Website", description: "Privates Projekt bei dem ich mich tiefgreifender mit der Webentwicklung befasst habe.", link: "#" },
    { id: 6, title: "Bildsegmentierungs-App", description: "Startup Projekt in dem ich in der Entwicklung mitwirke.", link: "#" },
  ];

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white mt-16">
            {/* Hero Wrapper */}
            <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg max-w-4xl w-full">
              
              {/* Profilbild (Links auf großen Bildschirmen) */}
              <img 
                src={timo_wiesner}
                alt="Timo Wiesner" 
                className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg mb-4 md:mb-0 md:mr-6"
              />

              {/* Name + Beschreibung */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold">Timo Wiesner</h1>
                <p className="text-lg text-gray-300 mt-2 max-w-lg">
                  Ich bin ein ehrgeiziger Informatik-Student, der gerne Probleme löst und auch mal kreative 
                  Lösungsansätze probiert. Ich arbeite gut im Team und bin sozial anpassungsfähig. Ich liebe es neue
                  Perspektiven einzunehmen und mich in die Rolle Anderer hineinzuversetzen. Ich arbeite auch gerne mit
                  Leuten aus anderen Fachbereichen zusammen, denn so kann man oft neue Zusammenhänge erkennen und gemeinsame Lösungsansätze finden. 
                </p>
              </div>

            </div>
    
          {/* Projects Section */}
          <div className="mt-20 w-full max-w-4xl px-4 mb-16">
            <h2 className="text-3xl font-semibold text-center mb-6">Projekte</h2>
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
            <p>📧 Kontakt: timow2001@live.de</p>
          </div>
        </div>
      );
    };
    
export default Home;
