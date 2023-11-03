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
    if (myIndex > x.length) { 
      myIndex = 1; // Define myIndex como 1 se todas as imagens já tiverem passado
    }
    x[myIndex - 1].style.display = "block"; // Exibe a imagem atual
    setTimeout(slide, 5000); // 5 segundos
  }

  const links = document.querySelectorAll('a[href^="#"]'); // Captura os links do menu

  links.forEach(link => { // Adicione um parâmetro (link) para representar o elemento do array
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Previne o comportamento padrão do link

      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
