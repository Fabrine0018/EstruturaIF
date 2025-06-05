console.log(" Cenário 1: ")
const idade = 25;
const ehClienteVip = false;
const rendaMensal = 2500;
const scoreCredito = 650;

if ((idade >= 18 && rendaMensal >= 2000 && scoreCredito >= 600) || (ehClienteVip && idade >= 18)) {
    console.log("Empréstimo aprovado");
} else {
    console.log("Empréstimo negado");
}

console.log(" Cenário 2: ")
const idade2 = 17;
const ehClienteVip2 = false;
const rendaMensal2 = 3000;
const scoreCredito2 = 700;
if ((idade2 >= 18 && rendaMensal2 >= 2000 && scoreCredito2 >= 600) || (ehClienteVip2 && idade2 >= 18)) {
    console.log("Empréstimo aprovado");
} else {
    console.log("Empréstimo negado");
}

console.log(" Cenário 3: ")
const idade3 = 22;
const ehClienteVip3 = true;
const rendaMensal3 = 1800; 
const scoreCredito3 = 550;
if ((idade3 >= 18 && rendaMensal3 >= 2000 && scoreCredito3 >= 600) || (ehClienteVip3 && idade3 >= 18)) {
    console.log("Empréstimo aprovado");
} else {
    console.log("Empréstimo negado");
}