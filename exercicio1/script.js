// # EXERCÍCIO1
let conta = 0;
while (true) {
  let resposta = prompt("Deseja comer mais coxinhas? (S/N)").toUpperCase();

  if (resposta === "S") {
    conta += 2.5;
  } else if (resposta === "N") {
    break;
  } else {
    console.log("Opção inválida. Por favor, digite 'S' para sim ou 'N' para não.");
  }
}
console.log(`Valor total da conta: R$ ${conta.toFixed(2)}`);
// # EXERCÍCIO2

// Obtém um número do usuário usando o prompt

let numero = prompt("qual o numero?");

// Use um loop for para criar a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}

// # EXERCÍCIO3
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i = 0; i < maioresPaises.length; i++) {
  console.log(`${i + 1} - ${maioresPaises[i]}`);
}



