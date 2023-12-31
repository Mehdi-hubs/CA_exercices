// Partie 1 : Déclaration des variables & Parsing

const calculatePower = () => {
  // Récupération des arguments depuis la ligne de commande
  const base = parseFloat(process.argv[2]);
  const exponent = parseFloat(process.argv[3]);

  // Partie 2 : Gestion des erreurs

  // Vérifier que deux arguments sont passés
  if (process.argv.length !== 4) {
    console.log("Usage : node terre_10.js [base] [exposant]");
    return;
  }

  // Vérifier si la base et l'exposant sont des nombres
  if (isNaN(base) || isNaN(exponent)) {
    console.log("Erreur : La base et l'exposant doivent être des nombres.");
    return;
  }

  // Vérifier si l'exposant est positif
  if (exponent < 0) {
    console.log("Erreur : L'exposant doit être un nombre positif.");
    return;
  }

  // Partie 3 : Résolution

  const result = base ** exponent;

  // Partie 4 : Affichage du Résultat

  console.log(result);
};

calculatePower();
