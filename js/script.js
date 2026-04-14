let contador = 0;

function voltear(card) {
  card.classList.toggle("volteada");

  if (!card.dataset.vista) {
    card.dataset.vista = "true";
    contador++;
    actualizarContador();
  }
}

function actualizarContador() {
  const contadorElemento = document.getElementById("counter");
  contadorElemento.textContent = contador;
}

function filtrar(tipo) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (tipo === "todas") {
      card.style.display = "block";
    } else if (tipo === "vocales") {
      if (card.dataset.tipo === "vocal") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}