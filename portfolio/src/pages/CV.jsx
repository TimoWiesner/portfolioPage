const CV = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white py-10 px-6 flex flex-col items-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">Lebenslauf</h1>
  
        {/* Ausbildung */}
        <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">🎓 Ausbildung</h2>
          <ul className="space-y-3">
            <li>
              <p className="font-bold">[Studiengang / Ausbildung]</p>
              <p className="text-gray-400">[Universität / Ausbildungsstätte] - [Jahr]</p>
            </li>
            <li>
              <p className="font-bold">[Schulabschluss]</p>
              <p className="text-gray-400">[Schule] - [Jahr]</p>
            </li>
          </ul>
        </section>
  
        {/* Erfahrungen */}
        <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">💼 Erfahrungen</h2>
          <ul className="space-y-3">
            <li>
              <p className="font-bold">[Jobtitel / Praktikum]</p>
              <p className="text-gray-400">[Firma / Organisation] - [Jahr]</p>
              <p className="text-gray-300">Kurzbeschreibung der Aufgaben.</p>
            </li>
            <li>
              <p className="font-bold">[Projektname]</p>
              <p className="text-gray-400">[Details zum Projekt]</p>
            </li>
          </ul>
        </section>
  
        {/* Fähigkeiten */}
        <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🚀 Fähigkeiten</h2>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gray-700 px-4 py-2 rounded-md">React.js</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">JavaScript</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Tailwind CSS</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Node.js</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Git & GitHub</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Teamarbeit</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Problemlösung</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default CV;
  