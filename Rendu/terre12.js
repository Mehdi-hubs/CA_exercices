// Partie 1 : Déclaration des variables
const ConvertTime12 = () => {
  const yourTime = process.argv[2];

  // Partie 2 : Parsing
  // Conversion des parties de la chaîne en heures et minutes
  const hours24 = parseInt(yourTime[0] + yourTime[1], 10);
  const minutes = parseInt(yourTime[3] + yourTime[4], 10);

  // Partie 3 : Gestion des erreurs
  // Fonction pour vérifier si un caractère est un chiffre
  const isDigit = (char) => char >= "0" && char <= "9";

  // Contrôle n°1 : Format de l'entrée
  const formatControl = () => {
    // Vérifier la taille de l'entrée
    if (yourTime.length !== 5) {
      console.log("Tu ne me la mettras pas à l'envers");
      return false;
    }

    // Vérifier que les ":" sont inclus et au bon endroit
    if (yourTime[2] !== ":") {
      console.log(`Veuillez entre votre heure dans ce format : "XX:XX"`);
      return false;
    }

    // Contrôle n°2 : L'entrée est un ensemble de nombres valides
    if (
      !isDigit(yourTime[0]) ||
      !isDigit(yourTime[1]) ||
      !isDigit(yourTime[3]) ||
      !isDigit(yourTime[4])
    ) {
      console.log("Tu ne me la mettras pas à l'envers");
      return false;
    }

    // Les heures doivent être comprises entre 0 et 24 et les minutes entre 0 et 59
    if (hours24 < 0 || hours24 > 24 || minutes < 0 || minutes > 59) {
      console.log("Tu ne me la mettras pas à l'envers");
      return false;
    }
    return true;
  };

  if (!formatControl()) {
    return false;
  }

  // Partie 4 : Résolution
  const solveTime = () => {
    if (hours24 === 24 && minutes === 0) {
      console.log("12:00 AM");
      return;
    }

    // Déterminer le suffixe AM/PM et ajuster les heures pour le format de 12 heures
    const suffix = hours24 >= 12 ? "PM" : "AM";
    let hours12 = hours24 % 12;

    // Gestion des cas midi et minuit
    if (hours12 === 0 || hours24 === 12) {
      hours12 = 12;
    }

    // Partie 5 : Affichage
    console.log(
      `${hours12 < 10 ? "0" + hours12 : hours12}:${
        minutes < 10 ? "0" + minutes : minutes
      } ${suffix}`
    );
  };

  solveTime();
};

ConvertTime12();
