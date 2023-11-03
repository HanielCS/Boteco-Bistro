// Codigo da sidebar separado para evitar conflito

document.addEventListener("DOMContentLoaded", function () { // Função da barra lateral
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("botaoAlternar");
    const cardapioDisplay = document.getElementById("mostrarCardapio");

    toggleButton.addEventListener("click", function () {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px"; // Fecha a barra lateral
        } else {
            sidebar.style.left = "0px"; // Abre a barra lateral
        }
    });

    const cardapioOption = document.getElementById("opcCardapio");
    cardapioOption.addEventListener("click", function () {
        if (cardapioDisplay.innerHTML.trim() !== '') { // Verifica se a imagem do cardápio está atualmente visível
            cardapioDisplay.innerHTML = ''; // Remove a imagem do cardápio
        } else {
            cardapioDisplay.innerHTML = '<img src="imagens/cardapio.jpg" alt="Cardápio">'; // Exibe a imagem do cardápio
        }
    });

    const links = document.querySelectorAll('a[href^="#"]'); // Captura os links do menu

    links.forEach(link => { // Adicione um parâmetro (link) para representar o elemento do array
        link.addEventListener('click', function (e) {
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
