const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

// Créer une instance de Sequelize pour se connecter à PostgreSQL
const sequelize = new Sequelize("digital_car", "postgres", "santiago", {
  host: "localhost",
  dialect: "postgres",
});

const app = express();
const port = 5000;

// Configuration de CORS pour autoriser les requêtes depuis React
app.use(
  cors({
    origin: "http://localhost:3000", // Adresse de votre frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    credentials: true, // Si vous utilisez des cookies ou des tokens
  })
);

// Middleware pour parser les données JSON et URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test de connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à PostgreSQL réussie");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données", err);
  });

// Une route simple pour tester le serveur
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API du backend");
});

// **Ajout du nouveau endpoint**
app.get("/api/example", (req, res) => {
  res.json({ message: "Hello depuis le backend !" });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur backend écoute sur http://localhost:${port}`);
});
