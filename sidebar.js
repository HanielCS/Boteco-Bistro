document.addEventListener("DOMContentLoaded", function() { // Função da barra lateral
  const barraLateral = document.querySelector(".barraLateral");
  const toggleButton = document.getElementById("botaoAlternar");

  toggleButton.addEventListener("click", function() {
    if (barraLateral.style.left === "0px") {
        barraLateral.style.left = "-250px"; // Fecha a barra lateral
    } else {
        barraLateral.style.left = "0px"; // Abre a barra lateral
    }
  });

  const links = document.querySelectorAll('a[href^="#"]'); // Captura os links do menu

  links.forEach(link => {
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
