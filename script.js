var listaMangas = [];
var elementoMensagem = document.getElementById("mensagem");

function Salvar() {
  var elementoLink = document.getElementById("linkAnime").value;

  if (elementoLink.endsWith(".jpg") || elementoLink.endsWith(".JPG")) {
    if (listaMangas == undefined) {
      Adicionar(elementoLink);
    } else {
      var teste = testarLista(listaMangas, elementoLink, teste);

      if (teste == 0) {
        Adicionar(elementoLink);
      } else {
        mensagensErro("Item já foi adicionado. Tente outro link.");
      }
    }
  } else {
    mensagensErro(
      "O endereço adicionado não é válido. Coloque uma imagem JPG."
    );
  }

  document.getElementById("linkAnime").value = "";
}

function Adicionar(link) {
  listaMangas.push(link);
  Listar();
}

function Listar() {
  var elementoListaMangas = document.getElementById("listaMangas");

  elementoListaMangas.innerHTML +=
    "<img class='imagem-manga' src=" +
    listaMangas[listaMangas.length - 1] +
    ">";
}

function LimparMensagem() {
  elementoMensagem.innerHTML = "";
  elementoMensagem.setAttribute("class", "center alocation");
}

function mensagensErro(texto) {
  elementoMensagem.innerHTML = texto;
  console.error(texto);
  elementoMensagem.setAttribute("class", "card center alocation");
}

function testarLista(lista, elementoLink, teste) {
  teste = 0;
  lista.forEach(function (item) {
    if (item == elementoLink) {
      teste++;
    }
  });
  return teste;
}
/*
Desafio 1 - Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos...
Desafio 2 - Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while
Desafio 3 - Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente
Desafio 4 - Criar um campo e botão para adicionar a imagem pela tela, e não direto no código
*/