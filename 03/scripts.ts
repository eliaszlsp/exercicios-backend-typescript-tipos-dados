const criarTabuada = (numeros: number[]) => {
  let tabuada: string = "";

  for (const numero of numeros) {
    for (let i = 0; i < 11; i++) {
      tabuada += `${numero} x ${i} = ${numero * i} \n`;
    }

    tabuada += "----------------------- \n";
  }

  return tabuada;
};

console.log(criarTabuada([1, 5, 2, 5]));
