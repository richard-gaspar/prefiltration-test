let paletta = ["sárga", "kék", "piros"];

function feladat01(szinek) {
  let lehetőségek = 0;
  console.log(szinek.length);

  // Ebben az esetben nem minden kombinációt vesz figyelembe (pl sárga + piros)
  // Több szín esetében pedig még nagyobb a hiba

  for (let i = 0; i < szinek.length; i++) {
    // take 2 colors
    if (i + 2 <= szinek.length) {
      lehetőségek++;
    }
    // take 3 colors
    if (i + 3 <= szinek.length) {
      lehetőségek++;
    }
    // take 4 colors
    if (i + 4 <= szinek.length) {
      lehetőségek++;
    }
  }

  console.log(lehetőségek);
}

feladat01(paletta);
