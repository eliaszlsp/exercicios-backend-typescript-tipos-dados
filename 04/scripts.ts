console.log("Starting");

interface Etiqueta {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}

const criarEtiqueta = (produto: Etiqueta) => {
  let etiqueta: string[] = [];

  for (let index = 1; index <= produto.qtd; index++) {
    etiqueta.push(`${produto.lote} ${produto.ano}  00${index}`);
  }

  return etiqueta;
};

const produto = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};
console.log(criarEtiqueta(produto));