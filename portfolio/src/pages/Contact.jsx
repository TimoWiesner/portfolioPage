const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
        
        {/* Überschrift */}
        <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
        
        {/* Platzhaltertext */}
        <p className="text-lg text-gray-300 text-center max-w-lg mb-6">
          Ich freue mich über Anfragen, Kooperationen oder einfach nur einen netten Austausch. Auch bei Fragen zögere nicht, mich per E-Mail zu kontaktieren!
        </p>
  
        {/* Kontakt-Button */}
        <a 
          href="mailto:timow2001@live.de"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          📧 E-Mail senden
        </a>
  
      </div>
    );
  };
  
  export default Contact;
  