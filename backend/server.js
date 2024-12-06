require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

// Créer une instance de Sequelize pour se connecter à PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);
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

// Ajouter l'endpoint /api/users
app.get("/api/users", (req, res) => {
  // Liste d'utilisateurs simulée
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

  res.json(users);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur backend écoute sur http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Une erreur est survenue !" });
});
