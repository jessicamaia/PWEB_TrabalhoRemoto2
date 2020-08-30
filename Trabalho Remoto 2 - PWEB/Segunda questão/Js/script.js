const BtnContar = document.querySelector("#BntContar");
const QuantNaoRep = document.querySelector("#QuantNaoRep");
const respostas = document.querySelector("#respostas");

console.log (BtnContar);
console.log (QuantNaoRep);
console.log (respostas);

BtnContar.addEventListener("click", () => {
    const dados = document.querySelector("#dados").value.replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    const ArrayPalavras = dados.split(' ');
    const QuantPalavras = []; 

    for (let index = 0; index < ArrayPalavras.length; index++) {
        const JaAdd =  QuantPalavras.findIndex((item) => item.palavra === ArrayPalavras[index])

        if (JaAdd!==-1) {
            QuantPalavras[JaAdd].quantidade = QuantPalavras[JaAdd].quantidade + 1;
        } 
        
        else {
            if(ArrayPalavras[index].length >= 2) {  
                QuantPalavras.push({ palavra: ArrayPalavras[index],quantidade: 1 })
            }
        }
    } 
    console.log(QuantPalavras);
    //Zerar o valor anterior
    QuantNaoRep.innerHTML = '';
    respostas.innerHTML = '';
    QuantNaoRep.innerText = QuantPalavras.length;
    const palavrasOrdenadas = ordenarPorQuantidade(QuantPalavras);

    for (let index = 0; index < palavrasOrdenadas.length; index++) {
        ExibirResultado (palavrasOrdenadas[index]);
        
    }
})

function ExibirResultado(item) {
    let div = document.createElement("div");
    let exibir = document.createTextNode(`${item.palavra} repete ${item.quantidade} vezes`);
    div.appendChild(exibir);
    respostas.appendChild(div);
  }   

  function ordenarPorQuantidade(array) {
    array.sort((a, b) => {
        if (a.quantidade < b.quantidade) {
          return -1;
        }
    
        if (a.quantidade > b.quantidade) {
          return 1;
        }
    
        return 0;
      });

    return array;
}
