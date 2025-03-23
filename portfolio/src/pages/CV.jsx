const CV = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white py-10 px-6 flex flex-col items-center mt-16">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">Lebenslauf</h1>
  
        {/* Ausbildung */}
        <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">🎓 Ausbildung</h2>
          <ul className="space-y-3">
            <li>
              <p className="font-bold">Bachelor of Science - Informatik</p>
              <p className="text-gray-400">Universität zu Lübeck - März 2025</p>
            </li>
            <li>
              <p className="font-bold">Abitur</p>
              <p className="text-gray-400">Gymnasium Trittau - August 2019</p>
            </li>
          </ul>
        </section>
  
        {/* Erfahrungen */}
        <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">💼 Erfahrungen</h2>
          <ul className="space-y-3">
            <li>
              <p className="font-bold">Studentische Hilfskraft</p>
              <p className="text-gray-400">Universität zu Lübeck - IMIS</p>
              <p className="text-xs text-gray-200">Dezember 2021 - September 2022</p>
              <p className="text-gray-300">Eigenständige Entwicklung eines Serious Games innerhalb des DigS-Gov Projekts</p>
            </li>
            <li>
              <p className="font-bold">Bundesfreiwilligendienst</p>
              <p className="text-gray-400">Grundschule Kuddewörde - AWO</p>
              <p className="text-xs text-gray-200">August 2019 - Februar 2020</p>
              <p className="text-gray-300">Begleitung und Unterstützung der Kinder im Schulalltag und Betreuung in der offenen Ganztagsschule</p>
            </li>
            <li>
              <p className="font-bold">Schülerpraktikum</p>
              <p className="text-gray-400">Konditorei Rabien, Berlin</p>
              <p className="text-xs text-gray-200">Oktober 2017 - 2 Wochen</p>

            </li>
            <li>
              <p className="font-bold">Schülerpraktikum</p>
              <p className="text-gray-400">Gemeindebücherei Trittau</p>
              <p className="text-xs text-gray-200">Februar 2016 - 2 Wochen</p>

            </li>
          </ul>
        </section>
  
        {/* Fähigkeiten */}
        <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">🖥️ Fähigkeiten</h2>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gray-700 px-4 py-2 rounded-md">Java</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">JavaScript</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Python</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">PyTorch</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Git & GitHub</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">C++</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">C#</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">HTML</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">React</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">CSS</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">SQL</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Assembler</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Lisp</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">ACT-R</li>
          </ul>
        </section>
        {/* Fremdsprachen */}
        <section className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">📖 Fremdsprachen</h2>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-gray-700 px-4 py-2 rounded-md">Deutsch - Muttersprche</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Englisch - fortgeschrittene Kenntnisse</li>
            <li className="bg-gray-700 px-4 py-2 rounded-md">Französisch - Grundkenntnisse</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default CV;
  