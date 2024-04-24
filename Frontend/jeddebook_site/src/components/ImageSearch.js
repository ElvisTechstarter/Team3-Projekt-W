import React, { useState } from 'react';
import axios from 'axios';

function ImageSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const apiKey = 'tzRh3_XR5MmTmycsHAuP9ckomItRE5IoFRhcIuPqdF8'; // Hier fügst du deinen API-Schlüssel ein

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`);
      setResults(response.data.results);
    } catch (error) {
      console.error('Fehler beim Durchführen der Bildersuche:', error);
      // Hier kannst du den Fehlerzustand setzen oder eine Fehlermeldung anzeigen
    }
  };

  const handleImageClick = (index) => {
    // Hier kannst du die gewünschte Aktion ausführen, wenn ein Bild geklickt wird
    console.log("Bild wurde geklickt:", index);
  };

  return (
    <div>
      <input type="text" placeholder='Hier soll Text rein' value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Suche</button>
    
      <div>
        {results.map((item, index) => (
          <img key={index} src={item.urls.small} alt={item.alt_description} onClick={() => handleImageClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default ImageSearch;
