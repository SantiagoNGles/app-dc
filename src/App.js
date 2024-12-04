import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/example")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des données :",
          error
        );
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
