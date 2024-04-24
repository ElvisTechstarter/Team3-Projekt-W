  // MyComponent.js
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';

  function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://api.example.com/data')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Fehler beim Laden der Daten:', error);
        });
    }, []); // Leeres Array als zweites Argument sorgt dafür, dass der Effekt nur einmal nach dem Rendern ausgeführt wird

    return (
      <div>
        {/* Hier kannst du die Daten aus dem State verwenden, z.B. data.map() */}
      </div>
    );
  }

  export default MyComponent;
