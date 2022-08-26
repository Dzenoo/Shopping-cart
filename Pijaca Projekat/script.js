let allTotal = 0;
function myFunc2(element) {
  let items = element.closest(".item");
  let naslov = items.querySelector("h2").innerText;
  let cena = items.querySelector("p").innerText;
  let input = items.querySelector("input").value;
  let totalno = document.querySelector(".alltotal");

  if (parseInt(input) > 0) {
    cena.substring(1);
    cena = parseInt(cena);

    total = parseInt(input) * cena;

    allTotal += total;

    let cart = document.querySelector(".cart");
    cart.innerHTML += `<div class="ca">
            <p class="name">${naslov}</p>
            <span class="cena">${total} dinara</span><br>
            <button onclick="remove(this)">Ukloni</button>
            </div>
            `;

    totalno.innerHTML = `Ukupno dinara: ${allTotal}`;
    element.setAttribute("disabled", "true");
  } else if (parseInt(input) < 0) {
    alert("Ne moze biti manje od 0");
  } else {
    alert("Ne moze biti prazno");
  }
}

function remove(el) {
  let mainEl = el.closest(".ca");
  let price = mainEl.querySelector(".cena").innerText;
  let name = mainEl.querySelector("p").innerText;
  let namirnice = document.querySelectorAll(".item");

  price = parseInt(price);

  allTotal -= price;
  let totalno = (document.querySelector(
    ".alltotal"
  ).innerHTML = `Ukupno dinara: ${allTotal}`);

  mainEl.remove();

  namirnice.forEach(function (vege) {
    let itemName = vege.querySelector(".si-content h2").innerText;

    if (itemName === name) {
      vege.querySelector(".actions input").value = "";
      vege.querySelector(".actions button").removeAttribute("disabled");
      vege.querySelector(".actions button").innerText = "Kupi";
    }
  });
}
