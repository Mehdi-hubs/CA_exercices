// Partie 1 : Déclaration des variables
let determineParity = () => {
  // Vérifier si un argument a été fourni
  if (process.argv.length < 3) {
    console.log("Utilisation : node terre05.js [nombre1] [nombre2]");
    return; // Sortir de la fonction si aucun argument n'a été fourni
  }

  let input = parseFloat(process.argv[2]);

  // Partie 3 : Gestion des erreurs
  if (isNaN(input) || !Number.isInteger(input)) {
    console.log("Tu ne me la mettras pas à l’envers.");
  } else {
    // Partie 2 : Parsing & Résolution

    if (input % 2 === 0) {
      console.log("pair");
    } else {
      console.log("impair");
    }
  }
};

// Partie 4 : Affichage

determineParity();
