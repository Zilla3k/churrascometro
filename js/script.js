let inputAdultos = document.querySelector("#adultos");
let inputCriancas = document.querySelector("#criancas");
let inputDuracao = document.querySelector("#duracao");

let result = document.querySelector("#resultado");

function calc() {
  let duracao = inputDuracao.value;
  let quantCarne =
    carnePP(duracao) * inputAdultos.value +
    (carnePP(duracao) / 2) * inputCriancas.value;
  let quantCerv = cervPP(duracao) * inputAdultos.value;
  let quantBeb =
    bebPP(duracao) * inputAdultos.value +
    (bebPP(duracao) / 2) * inputCriancas.value;

  result.innerHTML = `<p>${quantCarne / 1000}Kg de Carne</p>`;
  result.innerHTML += `<p>${Math.ceil(quantCerv / 355)} Latas de cerveja</p>`;
  result.innerHTML += `<p>${Math.ceil(
    quantBeb / 2000
  )} Garrafas de bebidas de 2L</p>`;
}

function carnePP(duracao) {
  let carne = 400;
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervPP(duracao) {
  let cerveja = 1200;
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
function bebPP(duracao) {
  let bebidas = 1000;
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
