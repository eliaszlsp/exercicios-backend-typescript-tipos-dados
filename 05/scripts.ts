const nomeQualquer = "programador";

const criarTracos = (nome: string): string => {
  /*   let nomeSeparado: string = "";
  for (const iterator of nome) {
    nomeSeparado += iterator + "-";
  }
  nomeSeparado = nomeSeparado.slice(0, -1);
  return nomeSeparado; */

  return nome.split("").join("-");
};

console.log(criarTracos(nomeQualquer));
