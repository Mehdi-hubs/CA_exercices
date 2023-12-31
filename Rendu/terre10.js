// Partie 1 : Déclaration des variables

const squareRoot = () => {
  // Partie 2 : Gestion des erreurs

  // Vérifier si l'utilisateur a entré un seul nombre et rien d'autre
  if (process.argv.length !== 3 || isNaN(parseFloat(process.argv[2]))) {
    console.log(
      `Usage : Extraire la racine carré d'un nombre. node terre_10.js "nombre"`
    );
    return;
    // Vérifier que l'entrée est un terme positif
  } else if (parseFloat(process.argv[2]) < 0) {
    console.log("Erreur : La racine carré n'accepte que des termes positifs");
    return;
  }

  // Partie 3 : Parsing

  const baseNumber = parseFloat(process.argv[2]);

  // Partie 4 : Résolution

  const result = baseNumber ** (1 / 2);

  // Partie 5 : Affichage

  console.log(result);
};

squareRoot();
