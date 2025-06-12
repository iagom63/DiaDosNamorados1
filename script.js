// Data de início do relacionamento
const dataInicio = new Date("2023-07-13T18:33:00");

// Atualiza o contador a cada segundo
function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").textContent =
    `${dias} dias, ${horas}h, ${minutos}min, ${segundos}s juntos 💜`;
}

setInterval(atualizarContador, 1000);
atualizarContador(); // Atualiza ao carregar

// Imagens da galeria
const imagens = [
  "fotos/1.JPG", "fotos/2.JPG", "fotos/3.JPG", "fotos/4.JPG", "fotos/5.JPG",
  "fotos/6.JPG", "fotos/7.JPG", "fotos/8.JPG", "fotos/9.JPG", "fotos/10.JPG",
  "fotos/11.JPG", "fotos/12.JPG", "fotos/13.JPG", "fotos/14.JPG", "fotos/15.JPG",
  "fotos/16.JPG", "fotos/17.JPG", "fotos/18.JPG", "fotos/19.JPG", "fotos/20.JPG",
  "fotos/21.JPG", "fotos/22.JPG", "fotos/23.JPG", "fotos/24.JPG", "fotos/25.JPG",
  "fotos/26.JPG", "fotos/27.JPG", "fotos/28.JPG"
];

const galeria = document.getElementById("gallery");

imagens.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.style.width = Math.floor(Math.random() * 150 + 100) + "px";
  img.style.height = Math.floor(Math.random() * 100 + 100) + "px";
  galeria.appendChild(img);
});

// Cria corações caindo
function criarCoração() {
  const coração = document.createElement("div");
  coração.classList.add("heart");
  coração.style.left = Math.random() * 100 + "vw";
  coração.style.animationDuration = Math.random() * 3 + 2 + "s";
  coração.style.fontSize = Math.random() * 20 + 10 + "px";
  coração.textContent = "❤️";

  document.querySelector(".falling-hearts").appendChild(coração);

  setTimeout(() => {
    coração.remove();
  }, 5000);
}

setInterval(criarCoração, 300);