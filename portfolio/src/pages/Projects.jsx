import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import anatomyHeart from "../assets/anatomy-heart.jpg";
import ai_head from "../assets/ai-head.png";
import jobcenter from "../assets/jobcenterlübeck.png";
import game_board from "../assets/game-board.jpg";
import e_commerce from "../assets/e-commerce.png";
import image_segmentation from "../assets/image-segmentation.png";

const projects = {
  "1": {
    title: "Trainieren eines UNets zur Segmentierung von Herzstrukturen",
    description: "Innerhalb des Moduls Bachelorprojekt haben wir 2023 in einem kleinen Team ein nnUNet darauf trainiert, eine Typ-B Aortendissektion durch Bildsegmentierung zu erkennen (TBAD-Dataset). Das übergeordnete Ziel war es hierbei, das trainierte Modell anschließend auf dem Akida-Bainchip 2.0 laufen zu lassen. Das Trainieren des Modells hat sehr gut funktioniert, die Segmentierung lief mit einer Genauigkeit von 98%. Da das trainierte Modell jedoch größer war als erwartet, lief die Konvertierung und Inbetriebnahme auf dem Akida-Bainchip schwieriger als erwartet und konnte leider nicht erfolgreich beendet werden.",  
    image: anatomyHeart,
    github: "none",
    tech: ["Python", "PyTorch", "Keras", "OpenCV", "Scikit-learn", "Numpy", "Onnx"]
  },
  "2": {
    title: "Entwicklung eines kognitiven Modells mit ACT-R",
    description: "Dieses Projekt war Teil meiner Bachelorarbeit. Hier habe ich in Zusammenarbeit mit einem Forscherteam der Technischen Universität Delft ein kognitives Modell (ACT-R) entwickelt, welches das menschliche Verhalten in einem Unterbrechungsszenario simulieren soll. Das Experiment wurde von der TU Delft entwickelt, dort sollten die Daten, die mein Modell hervorgebracht hat, dazu verwendet werden, Robotervorschläge innerhalb des Experiments bezüglich des Zeitpunkts und der Qualität zu verbessern. Das Modell war erfolgreich darin, menschliches Verhalten mit minimalen Abweichungen abzubilden. Auf meiner Arbeit basierend, habe ich gemeinsam mit dem Institut ein Paper verfasst und bei der ICCM eingereicht.", 
    image: ai_head,
    github: "none",
    tech: ["Lisp", "ACT-R", "Kognitive Modellierung", "Wissenschaftliches Arbeiten"]
  },
  "3": {
    title: "Serious Game zur sozialen Notlage Arbeitslosigkeit",
    description: "Am Institut für Multimediale und Interaktive Systeme habe ich während meiner Tätigkeit als studentische Hilfskraft im Projekt Die öffentliche Verwaltung als Förderer digitaler Souveränität (DigS-Gov) eigenverantwortlich ein Serious Game entwickelt. Es handelte sich um ein Point-and-Click Adventure, in dem der Spieler in die Rolle eines Arbeitslosen schlüpft und versucht, sich im Jobcenter zurechtzufinden. Es diente der erleichterten Informatiosnvermittlung und des Verständnisses der Prozesse im Jobcenter. Hierbei habe ich nach geeigneten Frameworks rechercheriert, so wie grafische Oberflächen gestaltet und die Spiellogik implementiert.",
    image: jobcenter,
    github: "none",
    tech: ["JavaScript", "Design", "Softwareentwicklung"]
  },
  "4": {
    title: "Brettspielrealisierung mit JavaFX Oberfläche",
    description: "Dieses Projekt wurde im Rahmen des Moduls Software Engineering Praktikum im Jahr 2022 entwickelt. Das Hauptziel bestand darin, eine digitale Version des Brettspiels Keltis zu konzipieren und umzusetzen. Im Team haben wir diverse Einstellungsoptionen sowie Lokalen-Multiplayer mit bis zu vier Spielern und High-Score Listen implementiert. Zusätzlich haben wir verschiedene Schwierigkeitsgrade für KI-Gegner konzipiert. Während des Projekts haben wir unser Wissen über Softwarearchitektur und Teamkoordination erweitert.",
    image: game_board,
    github: "none",
    tech: ["Java", "JavaFX"]
  },
  "5": {
    title: "E-Commerce-Website",
    description: "Privat habe ich eine kleine, aber funktionale E-Commerce Website entwickelt. Das Front-End wurde mit React und TailwindCSS umgesetzt. Als Backend dient die Headless CMS Sanity und der Bezahlvorgang erfolgt über Stripe. Die Website ist responsiv und bietet eine einfache Benutzerführung. Die Website ist nicht online, da sie nur zu Testzwecken entwickelt wurde. Jedoch habe ich hierbei viel über das zusammenspiel von Front- und Backend gelernt, sowie über Website-Entwicklung im allgemeinen.",
    image: e_commerce,
    github: "none",
    tech: ["React", "Stripe", "Sanity"]
  },
  "6": {
    title: "Startup Bildsegmentierungs-App",
    description: "Aktuell unterstütze ich bei der Umsetzung einer Startup-Idee. Es handelt sich um eine App, die mithilfe von Segment-Anything Bilder segmentiert und anhand von bestimmten Kriterien bewertet. Weitere Informationen kann ich hierzu leider nicht preisgeben, da es sich um ein laufendes Projekt handelt.",
    image: image_segmentation,
    github: "none",
    tech: ["Python", "OpenCV", "PyTorch", "Segment-Anything"]
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
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg mb-20">
        
        {/* Left Side: Image */}
        <img src={project.image} alt={project.title} className="w-full md:w-1/2 rounded-lg shadow-md bg-white" />
        
        {/* Right Side: Description & Tech-Stack */}
        <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
          {/* Project Description */}
          <p className="text-gray-300 text-lg">{project.description}</p>

          {/* Tech-Stack unter der Beschreibung */}
          <div className="mt-4">
            <h3 className="text-gray-300 font-semibold">Skills:</h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, index) => (
                <li key={index} className="bg-gray-700 px-3 py-1 rounded-md text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
      

      <Link to={`/project/${projectId === "6" ? 1 :  parseInt(projectId) + 1}`}>
        <button className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          <FaArrowCircleRight className="text-xl" />
        </button>
      </Link>
      

      
        <Link to={`/project/${projectId === "1" ? 6: parseInt(projectId) - 1}`}>
          <button className="fixed bottom-6 left-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            <FaArrowCircleLeft className="text-xl" />
          </button>
        </Link>
      
            

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
