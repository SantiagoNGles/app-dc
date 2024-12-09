import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "./api.config";
import UserList from "./components/UserList";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

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
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path="/" element={<UserList />} />

            {/* Route pour la page de connexion */}
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
