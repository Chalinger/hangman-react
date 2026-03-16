 
## 🚀 Installation & lancement
 
### 1. Démarrer l'API locale
 
L'application dépend d'un serveur Node.js local pour récupérer les mots. Clonez et démarrez le projet [node-hangman-api](https://github.com/alexischarp-education/node-hangman-api) :
 
```bash
# Cloner l'API
git clone https://github.com/alexischarp-education/node-hangman-api.git
cd node-hangman-api
 
# Installer les dépendances
npm install
 
# Lancer le serveur de développement
npm run dev
```
 
> Le serveur démarre sur le port **3333** par défaut : `http://localhost:3333`
 
---
 
### 2. Démarrer l'application React
 
Dans un **nouveau terminal**, clonez et lancez le projet hangman-react :
 
```bash
# Cloner le projet
git clone https://github.com/Chalinger/hangman-react.git
cd hangman-react
 
# Installer les dépendances
npm install
 
# Lancer l'application
npm start
```
 
> L'application sera accessible sur `http://localhost:3000`
 
---
 
## 🌐 API
 
L'application communique avec l'API locale via une requête `POST` sur l'endpoint `/`.
