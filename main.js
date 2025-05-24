let deposito = 0;
let saldo = 0;
let extrato = "";
let numeroSaques = 0;
let limiteSaques = 3;
let limiteValor = 500;

while (true) {
  let menu = prompt(`
        ============================
        Selecione uma opção:
            [d] - Depósito
            [s] - Saque
            [e] - Extrato
            [q] - Sair
        ============================
    `);

  if (menu == "d") {
    let valor = parseFloat(prompt("Informe o valor do depósito: R$ "));
    if (valor > 0) {
      saldo += valor;
      extrato += `Depósito de R$ ${valor} \n`;
    } else {
      alert("@@@  Operação Falhou! O valor informado é inválido!  @@@");
    }
  } else if (menu == "s") {
    let valor = parseFloat(prompt("Informe o valor do saque: R$ "));
    let excedeuSaque = numeroSaques >= limiteSaques;
    let excedeuLimiteValor = valor > limiteValor;
    let excedeuSaldo = valor > saldo;
    if (excedeuSaldo) {
      alert("@@@  Operação Falhou! Você não tem saldo suficiente!  @@@");
    } else if (excedeuSaque) {
      alert("@@@  Operação Falhou! O número de saques foi excedido!  @@@");
    } else if (excedeuLimiteValor) {
      alert("@@@  Operação Falhou! O valor do saque excede o limite! @@@");
    } else if (valor > 0) {
      saldo -= valor;
      extrato = extrato + `Saque de R$ ${valor} \n`;
      alert(`Saque de ${valor} realizado com sucesso!`);
      numeroSaques++;
    } else {
      alert("@@@  Operação Falhou! O valor informado é inválido!  @@@");
    }
  } else if (menu == "e") {
    let mensagem =
      extrato == "" ? "Não foram realizados movimentações." : extrato;
    alert(`
      ==== EXTRATO ====
        ${mensagem}
        Saldo: R$ ${saldo.toFixed(2)}
      =================
      `);
  } else if (menu == "q") {
    alert("Obrigada pela preferência !!!");
    break;
  } else {
    alert("@@@ Opção inválida, por favor selecione uma operação correta! @@@");
  }
}

// 1. **Depósito**
// - Deve aceitar apenas valores **positivos**.
// - Os depósitos devem aparecer no extrato.
// 2. **Saque**
// - Permitir **no máximo 3 saques diários**.
// - Cada saque pode ter o valor **máximo de R$ 500,00**.
// - O sistema deve bloquear saques se o usuário não tiver saldo suficiente, exibindo mensagem:
//     `Saldo insuficiente para saque.`
// - Os saques devem ser armazenados e aparecer no extrato.
// 3. **Extrato**
// - Listar todas as **movimentações** (depósitos e saques) feitas.
// - No final da listagem, mostrar o **saldo atual**.
// - Formatar os valores no padrão brasileiro:
//     Ex: `R$ 1500.45`
// - Se não houver movimentações, mostrar:
//     `Não foram realizadas movimentações.`
