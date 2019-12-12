/* Exercice 1 Ecrire une fonction qui affiche la table de multiplication de 5 */

/*let a = 5;
let b = 0;

while (b <= 10) {
  console.log(b * a);
  b++;
}*/

/* Exercice 2 Ecrire une fonction qui prend un paramètre et qui affiche la table de multiplication de ce paramètre */

/*let a = 234;
let b = 1;

while (b <= 10) {
  console.log(b * a);
  b++;
}*/

/* Exercice 3 Ecrire une fonction qui prend un paramètre qui affiche error si le chiffre et négatif ou sa table de multiplication si il est positif*/

let a = 10;
let i = 0;

for (i = 0; i <= 10; i++) {
  if (a < 0) {
    console.log('Error')
  }
  else {
    console.log(i * a);
  }
}

