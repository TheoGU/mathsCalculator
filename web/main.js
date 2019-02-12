const number = 3;
const modulo = 71;
const puissance = 1235;




const tab = [number];
let calc = 1;

const binaire = (puissance).toString(2);
const binaireReverse  = binaire.split('').reverse().join('');

tab.push();
for (var i = 0; i < binaire.length-1; i++) {
  tab.push(tab[i]*tab[i] % modulo);
}

  for (var i = 0; i < binaireReverse.length; i++) {
    if (binaireReverse[i] == 1) {
      calc *= tab[i];
    }
  }
calc %= modulo;
console.log(`${calc} mod ${modulo}`);
