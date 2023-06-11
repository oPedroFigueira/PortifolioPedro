function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "none") ? "block" : "none";
  }

  var swiper = new Swiper('.swiper-container', {
    // Opções de configuração do carrossel, se necessário
  });
 
 
  function exibirTexto() {
    var texto = document.getElementById("texto");
    texto.style.display = "block";
  }