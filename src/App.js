import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./api.config";

import "./App.css";
import UserList from "./components/UserList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/example`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des données :",
          error
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <Header />
      <main>
        <UserList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
