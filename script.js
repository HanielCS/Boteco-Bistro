document.addEventListener("DOMContentLoaded", function() {
  var myIndex = 0; // Variável para controlar o slide
  slide(); // Chamada de função para iniciar assim que a página for carregada

  function slide() {
    var i;
    var x = document.getElementsByClassName("mySlides"); // Seleciona todos os elementos com a classe mySlides
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; // Oculta todas as imagens do slide
    }
    myIndex++; // Incremento de valor para passar imagem
    if (myIndex > x.length) { myIndex = 1 } // Define myIndex como 1 se todas as imagens ja tiverem passado
    x[myIndex - 1].style.display = "block"; // Exibe a imagem atual
    setTimeout(slide, 5000); // 1000 = 1 segundo
  }

});