import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import styles from "./ImageSearch.module.css";
import SearchContext from "./../../../contexts/SearchProvider";

function ImageSearch() {
  const [imageResults, setImageResults] = useState([]);
  const { handleSearch, query } = useContext(SearchContext);
  const apiKey = "tzRh3_XR5MmTmycsHAuP9ckomItRE5IoFRhcIuPqdF8"; // Hier fügst du deinen API-Schlüssel ein

  const handleImageSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`
      );
      setImageResults(response.data.results);
    } catch (error) {
      console.error("Fehler beim Durchführen der Bildersuche:", error);
      // Hier kannst du den Fehlerzustand setzen oder eine Fehlermeldung anzeigen
    }
  };

  const handleImageClick = (index) => {
    // Hier kannst du die gewünschte Aktion ausführen, wenn ein Bild geklickt wird
    console.log("Bild wurde geklickt:", index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        handleImageSearch(query);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [handleSearch, query]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        Bildersuche Resultate für {query}{" "}
        <div className={styles.headerUnderline} />
      </div>
      <div className={styles.imagecontainer}>
        {imageResults.map((item, index) => (
          <div className={styles.img}>
            <img
              key={index}
              src={item.urls.thumb}
              alt={item.alt_description}
              onClick={() => handleImageClick(index)}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSearch;
