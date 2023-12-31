// Récupérer le nom du fichier du script à partir de process.argv[1]
const path = process.argv[1];
const fileName = path.split('/').pop();
console.log(fileName);
