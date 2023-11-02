// Codigo da sidebar separado para evitar conflito

document.addEventListener("DOMContentLoaded", function() { // Função da barra lateral
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.getElementById("botaoAlternar");
  const cardapioDisplay = document.getElementById("mostrarCardapio");

  toggleButton.addEventListener("click", function() {
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px"; // Fecha a barra lateral
    } else {
      sidebar.style.left = "0px"; // Abre a barra lateral
    }
  });

  const cardapioOption = document.getElementById("opcCardapio");
  cardapioOption.addEventListener("click", function() {
    if (cardapioDisplay.innerHTML.trim() !== '') { // Verifica se a imagem do cardápio está atualmente visível
      cardapioDisplay.innerHTML = ''; // Remove a imagem do cardápio
    } else {
      cardapioDisplay.innerHTML = '<img src="imagens/cardapio.jpg" alt="Cardápio">'; // Exibe a imagem do cardápio
    }
  });
});
