// Partie 1 : Déclaration des variables

const isPrime = () => {
  // Partie 2 : Gestion des erreurs

  // Vérifier qu'un seul argument est passé
  if (process.argv.length !== 3) {
    console.log("Usage : Trouver un nombre premier. node terre_10.js [nombre]");
    return;
  }

  // Partie 3 : Parsing
  let number = parseFloat(process.argv[2]);
  let sqrt = number ** (1 / 2);

  if (isNaN(number)) {
    // Vérifier si l'entrée est un nombre
    console.log("Erreur : Vous devez entrer un nombre.");
    return;
    // Vérifier que l'entrée est un entier naturel > 1
  } else if (number <= 1) {
    console.log(
      "Erreur : La racine carré n'accepte que des termes positifs > 1"
    );
    return;
  }

  // Partie 4 : Résolution

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      console.log(`Non, ${number} n'est pas un nombre premier.`);
      return;
    }
  }

  // Partie 5 : Affichage

  console.log(`Oui, ${number} est un nombre premier.`);
};

isPrime();
