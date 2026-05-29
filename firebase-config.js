// ============================================================
// CONFIGURATION FIREBASE — À REMPLIR PAR L'ADMINISTRATEUR
// ============================================================
//
// Comment obtenir ces valeurs :
//   1. Ouvre https://console.firebase.google.com
//   2. Sélectionne le projet "ministere-lumiere"
//   3. Clique sur l'icône d'engrenage > "Paramètres du projet"
//   4. Onglet "Général" > section "Vos applications"
//   5. Clique sur l'icône Web "</>" pour ajouter une application web
//      (si tu n'en as pas encore enregistrée)
//   6. Donne-lui un nom (ex : "Registre MMLC Web")
//   7. NE coche PAS "Configurer Firebase Hosting" pour l'instant
//   8. Firebase t'affiche un bloc de code avec "firebaseConfig = {...}"
//   9. Copie/colle les valeurs dans le bloc ci-dessous
//
// Le compte admin que tu utilises sur Android fonctionnera aussi ici,
// puisque c'est la même base Firebase Authentication.
// ============================================================

export const firebaseConfig = {
  apiKey: "REMPLACER_PAR_VOTRE_API_KEY",
  authDomain: "ministere-lumiere.firebaseapp.com",
  projectId: "ministere-lumiere",
  storageBucket: "ministere-lumiere.firebasestorage.app",
  messagingSenderId: "86084255099",
  appId: "REMPLACER_PAR_VOTRE_APP_ID_WEB"
};
