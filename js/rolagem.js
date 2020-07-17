
// Quando o usuário rolar a página, execute myFunction
window.onscroll = function () { rolagem() };

// Obtenha a barra de navegação
var navbar = document.getElementById("navbar");

// Obter a posição de deslocamento da barra de navegação
var sticky = navbar.offsetTop;

// Adicione a classe sticky à barra de navegação quando atingir sua posição de rolagem. Remova "sticky" quando sair da posição de rolagem
function rolagem() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



