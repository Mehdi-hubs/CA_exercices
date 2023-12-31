// Fonctions et ou variables utilisées
const stdout = process.stdout;
const args = process.argv;

// Partie 1 : Gestion d'erreur
if (args === undefined || args === null) {
  stdout.write('Erreur: Les arguments de la ligne de commande sont indéfinis.\n');
  exit(1); // Sortie du programme avec un code d'erreur
}

// Partie 2 : Parsing
let argsLength = 0;
while (args[argsLength] !== undefined) {
  argsLength++;
}

// Partie 3 : Résolution (Stockez les résultats dans une variable)
let result = '';
for (let i = 2; i < argsLength; i++) {
  let arg = args[i];
  let argLength = 0;
  while (arg[argLength] !== undefined) {
    argLength++;
  }

  for (let j = 0; j < argLength; j++) {
    result += arg[j];
  }
  result += '\n';
}

// Partie 4 : Affichage
let resultLength = 0;
while (result[resultLength] !== undefined) {
  resultLength++;
}

for (let i = 0; i < resultLength; i++) {
  stdout.write(result[i]);
}
