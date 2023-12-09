interface Usuarios {
  nome: string;
  idade: number;
  status: boolean;
}

export const usuarios = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtrarUsuarios = (usuarios: Usuarios[], nome: string) => {
  const nomeDono = usuarios.filter((dono) =>
    dono.nome.toLowerCase().includes(nome.toLowerCase())
  );

  return nomeDono;
};
console.log(filtrarUsuarios(usuarios, "gui"));
