// Partie 1 : Gestion d'erreurs

const revertString = () => {
  // Vérifier que l'entrée reçoit une seule chaîne de caractères, sinon le programme s'arrête.
  process.argv.length < 3
    ? console.log('Utilisation : node terre_07.js "Chaine de caractères"')
    : process.argv.length > 3
    ? console.log("Veuillez insérer une chaine de caractères")
    : null;

  if (process.argv.length !== 3) return;

  // Partie 2 : Déclaration des variables & Parsing

  const input = process.argv.slice(2).join(" ");
  let revertedString = "";

  // Partie 3 : Résolution

  for (let i = input.length - 1; i >= 0; i--) {
    revertedString += input[i];
  }

  // Partie 4 : Affichage

  console.log(revertedString);
};

revertString();
