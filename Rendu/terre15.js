// Partie 1 : Déclaration des variables
const sortNumbers = () => {
  const args = process.argv.slice(2);
  const nums = [];

  // Partie 3 : Parsing

  const argsCheck = () => {
    for (let i = 0; i < args.length; i++) {
      const numbers = Number(args[i]);

      // Partie 2 : Gestion des erreurs
      if (isNaN(numbers)) {
        console.log("erreur.");
        return false;
      }
      nums.push(numbers);
    }
    return true;
  };

  if (!argsCheck()) return;

  // Partie 4 : Résolution
  const sortCheck = () => {
    let isSorted = true;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        isSorted = false;
        break;
      }
    }
    return isSorted;
  };

  // Partie 5 : Affichage
  console.log(sortCheck() ? "Triée !" : "Pas triée !");
};

sortNumbers();
