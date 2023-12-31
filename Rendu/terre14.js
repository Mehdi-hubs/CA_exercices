// Partie 1 : Déclaration des variables

const findMedian = () => {
  // Partie 2 : Parsing
  const nombres = process.argv.slice(2).map(Number);
  const [a, b, c] = nombres;

  // Partie 3 : Gestion des erreurs
  // Vérification de la validité des entrées
  if (nombres.length !== 3 || nombres.some(isNaN)) {
    console.log(
      "Utilisation : Trouver le nombre médian : veuillez fournir exactement trois nombres entiers."
    );
    return;
  }
  // Contrôle de l'inégalité entre les nombres
  if (a === b || b === c || a === c) {
    console.log("Erreur : les nombres doivent être distincts.");
    return;
  }
  // Partie 4 : Résolution

  const median = () => {
    if ((a > b && a < c) || (a < b && b > c)) {
      return a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
      return b;
    } else {
      return c;
    }
  };

  // Partie 5 : Affichage
  console.log(median());
};

findMedian();
