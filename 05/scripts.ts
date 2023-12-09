const nomeQualquer = "programador";

const criarTracos = (nome: string) => {
  let nomeSeparado: string = "";
  for (const iterator of nome) {
    nomeSeparado += iterator + "-";
  }
  nomeSeparado = nomeSeparado.slice(0, -1);
  return nomeSeparado;
};

console.log(criarTracos(nomeQualquer));
