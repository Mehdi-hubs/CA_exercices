// Partie 1 : Déclaration des variables & Parsing

let division = () => {
  // Vérifier si l'entrée reçoit au maximum deux arguments, sinon le programme s'arrête.
  if (process.argv.length < 3) {
    console.log("Utilisation : node terre_06.js [nombre01] [nombre02]");
    return; // Arrêt.
  }

  // Ici on récupère les deux caractères du tableau process.arg
  const num1 = parseFloat(process.argv[2]);
  const num2 = parseFloat(process.argv[3]);

  // Partie 2 : Gestion des erreurs
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num2 === 0
  ) {
    console.log('"Tu ne me la mettras pas à l’envers."');
    return;
  } else {
    //Partie 3 : Résolution
    let result = num1 / num2;
    let reminder = num1 % num2;

    // Partie 4 : Affichage
    console.log(`résultat : ${result} \nreste : ${reminder}`);
  }
};

division();
