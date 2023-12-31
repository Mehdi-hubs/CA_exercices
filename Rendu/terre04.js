// Partie 1 : Déclaration des variables

let nLettre = () => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lettreDebut = process.argv[2];
  let resultat = "";
  let lettreTrouvee = false;

  // Partie 2 : Parsing

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === lettreDebut) {
      lettreTrouvee = true;
    }
    if (lettreTrouvee) {
      resultat += alphabet[i];
    }
  }

  // Partie 3 : Gestion des erreurs

  if (!lettreTrouvee) {
    console.log("Erreur : Veuillez entrer une lettre minuscule valide.");
  } else {

    // Partie 4 : Affichage
    console.log(`${resultat}\n`);
  }
};

nLettre();
