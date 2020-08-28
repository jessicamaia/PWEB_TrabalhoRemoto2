const BtnConv = document.querySelector("#BntConversao");
const respostas = document.querySelector("#respostas");
console.log(BtnConv);

BtnConv.addEventListener("click", () => {
  const dados = document.querySelector("#dados").value;
  const temperatura = document.querySelector("#temp").value;
  const saida = document.querySelector("#saida").value;
  const valor = dados.split(",");

  if (String(temperatura) == "Celsius") {
    if (String(saida) == "Fahrenheit") {
      valor.forEach((element) => {
        const converter = parseFloat(element);
        let ResultadoConversao = (converter * 9) / 5 + 32;
        if (converter <= -273.15) {
          ResultadoConversao = "Entrada Inválida";
        }
        ExibirResultado(converter, ResultadoConversao);
      });
    }

    if (String(saida) == "Kelvin") {
      valor.forEach((element) => {
        const converter = parseFloat(element);
        let ResultadoConversao = converter + 273.15;
        if (converter <= -273.15) {
          ResultadoConversao = "Entrada Inválida";
        }
        ExibirResultado(converter, ResultadoConversao);
      });
    }
  }

  if (String(temperatura) == "Fahrenheit") {
    if (String(saida) == "Celsius") {
      valor.forEach((element) => {
        const converter = parseFloat(element);
        let ResultadoConversao = ((converter - 32) * 5) / 9;
        if (converter <= -459.67) {
          ResultadoConversao = "Entrada Inválida";
        }
        ExibirResultado(converter, ResultadoConversao);
      });
    }

    if (String(saida) == "Kelvin") {
      valor.forEach((element) => {
        const converter = parseFloat(element);
        let ResultadoConversao = ((converter - 32) * 5) / 9 + 273.15;
        if (converter <= -459.67) {
          ResultadoConversao = "Entrada Inválida";
        }
        ExibirResultado(converter, ResultadoConversao);
      });
    }
  }
  
  if (String(temperatura) == "Kelvin") {
    if (String(saida) == "Celsius") {
      valor.forEach((element) => {
        const converter = parseFloat(element);
        let ResultadoConversao = converter - 273.15;
        if (converter <= 0) {
          ResultadoConversao = "Entrada Inválida";
        }
        ExibirResultado(converter, ResultadoConversao);
      });
    }

    if (String(saida) == "Fahrenheit") {
      valor.forEach((element) => {
        const converter = parseFloat(element);
        let ResultadoConversao = (converter - 273.15) * (9 / 5) + 32;
        if (converter <= 0) {
          ResultadoConversao = "Entrada Inválida";
        }
        ExibirResultado(converter, ResultadoConversao);
      });
    }
  }
});

function ExibirResultado(converter, ResultadoConversao) {
  let div = document.createElement("div");
  let exibir = document.createTextNode(`${converter}->${ResultadoConversao}`);
  div.appendChild(exibir);
  respostas.appendChild(div);
}
