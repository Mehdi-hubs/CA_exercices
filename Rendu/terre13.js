// Partie 1 : Déclaration des variables
const convertTime24 = () => {
  const yourTime = process.argv[2];

  // Partie 2 : Parsing
  // Conversion des parties de la chaîne en heures et minutes
  const hours12 = parseInt(yourTime.substring(0, 2), 10);
  const minutes = parseInt(yourTime.substring(3, 5), 10);
  const suffix = yourTime.substring(5).toUpperCase();

  // Partie 3 : Gestion des erreurs
  // Fonction pour vérifier si un caractère est un chiffre
  const isDigit = (char) => char >= "0" && char <= "9";

  // Variable de contrôle, contient les messages d'erreur
  const ERRORS = {
    INVALID_LENGTH: "Format invalide. Format attendu 'HH:MMAM' ou 'HH:MMPM'.",
    INVALID_FORMAT:
      "Format invalide. Utilisez ':' pour séparer heures et minutes, et 'AM' ou 'PM' pour le suffixe.",
    INVALID_NUMBERS: "Les heures et les minutes doivent être des nombres",
    INVALID_RANGE:
      "Les heures doivent être entre 1 et 12, et les minutes entre 0 et 59",
  };

  // Fonction pour contrôler l'entrée
  const validateTimeFormat = (yourTime) => {
    if (yourTime.length !== 7) return ERRORS.INVALID_LENGTH;
    if (yourTime[2] !== ":" || (suffix !== "AM" && suffix !== "PM"))
      return ERRORS.INVALID_FORMAT;
    if (
      !isDigit(yourTime[0]) ||
      !isDigit(yourTime[1]) ||
      !isDigit(yourTime[3]) ||
      !isDigit(yourTime[4])
    )
      return ERRORS.INVALID_NUMBERS;
    if (hours12 < 1 || hours12 > 12 || minutes < 0 || minutes > 59)
      return ERRORS.INVALID_RANGE;
    return null;
  };

  // Fonction pour valider l'entrée
  const validationResult = validateTimeFormat(yourTime);
  if (typeof validationResult === "string") {
    console.log(validationResult);
    return;
  }

  // Partie 4 : Résolution
  const solveTime = () => {
    let hours24 =
      hours12 === 12
        ? suffix === "AM"
          ? 0
          : 12
        : suffix === "PM"
        ? (hours12 % 12) + 12
        : hours12;

    // Partie 5 : Affichage

    return `${hours24 < 10 ? "0" + hours24 : hours24}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };
  console.log(solveTime());
};

convertTime24();
