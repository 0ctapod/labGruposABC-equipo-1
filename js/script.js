// CONTADOR
let contador = 0;




function voltear(card){
    card.classList.toggle("volteada")
}

//FILTRO
function filtrar(tipo) {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    if (tipo === "todas") {
      card.style.display = "block";
    } else {
      card.style.display =
        card.dataset.tipo === "vocal"
          ? "block"
          : "none";
    }

  });
}