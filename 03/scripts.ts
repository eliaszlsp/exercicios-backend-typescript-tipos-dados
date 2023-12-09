const criarTabuada = (numeros: number[]) => {
  const tabuada = [];

  for (let index = 0; index < 11; index++) {
    const element = numeros[index];
    tabuada.push(`${element} x ${index}=${element * index}`);

    if (index === 10) {
      tabuada.join(" ");
      tabuada.push("----------");
    }
  }

  return tabuada;
};

console.log(criarTabuada([1, 5, 2]));
