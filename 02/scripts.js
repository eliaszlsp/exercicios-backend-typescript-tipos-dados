"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = void 0;
exports.usuarios = [
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
var buscarDonoPet = function (usuarios, nome) {
    var nomeDono = usuarios.filter(function (dono) { return dono.nome.includes(nome); });
    return nomeDono;
};
console.log(buscarDonoPet(exports.usuarios, "Jo"));
