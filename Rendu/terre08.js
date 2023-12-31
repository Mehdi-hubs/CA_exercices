// Partie 1 : Déclaration des variables

const stringLength = () => {
  let counter = 0;
  let index = 0;

  // Partie 2 : Gestion d'erreurs
  // Vérifier si l'utilisateur n'a entré qu'une seule chaîne de caractères et rien d'autre

  if (
    process.argv.length !== 3 ||
    (!isNaN(parseFloat(process.argv[2])) && isFinite(process.argv[2]))
  ) {
    console.log("erreur.");
    return;
  }

  // Partie 3 : Parsing

  const yourString = process.argv[2];

  // Partie 4 : Résolution

  while (yourString[index] !== undefined) {
    counter++;
    index++;
  }

  // Partie 5 : Affichage

  console.log(counter);
};

stringLength();
