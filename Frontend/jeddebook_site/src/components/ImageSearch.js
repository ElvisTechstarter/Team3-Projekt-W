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
      <style>
        {`
          .input-container {
            margin-bottom: 20px;
          }

          .input-container input[type="text"] {
            padding: 10px;
            width: 200px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
          }

          .input-container button {
            padding: 10px 20px;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            font-size: 16px;
          }

          .input-container button:hover {
            background-color: #0056b3;
          }

          .image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .image-container img {
            margin-bottom: 10px;
            max-width: 32%;
            height: auto;
            border-radius: 5px;
            cursor: pointer;
            object-fit: cover; /* Alle Bilder werden proportional skaliert */
          }

          .image-container img:hover {
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
          }
        `}
      </style>

      <form onSubmit={e => { e.preventDefault(); }}>
        <div className="input-container">
          <input type="text" placeholder='Hier soll Text rein' value={query} onChange={e => setQuery(e.target.value)} />
          <button type="submit" onClick={handleSearch}>Suche</button>
        </div>
      </form>
    
      <div className="image-container">
        {results.map((item, index) => (
          <img key={index} src={item.urls.thumb} alt={item.alt_description} onClick={() => handleImageClick(index)} />
        ))}
      </div>
    </div>  
  );
}

export default ImageSearch;
