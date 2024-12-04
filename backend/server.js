const express = require("express");
const { Sequelize } = require("sequelize");

// Créer une instance de Sequelize pour se connecter à PostgreSQL
const sequelize = new Sequelize("digital_car", "postgres", "santiago", {
  host: "localhost",
  dialect: "postgres",
});

const app = express();
const port = 5000;

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

app.listen(port, () => {
  console.log(`Le serveur backend écoute sur http://localhost:${port}`);
});
