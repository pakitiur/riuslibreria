// 1. Buscamos en la página lo que vamos a usar
const lista = document.querySelector("#lista");
const totalTexto = document.querySelector("#total");
const botones = document.querySelectorAll(".agregar");

// 2. Aquí guardamos cuánto lleva el cliente
let total = 0;

// 3. A cada botón "Agregar" le decimos qué hacer cuando le den clic
botones.forEach(function (boton) {
    boton.addEventListener("click", function () {

        // Leemos el nombre y el precio escondidos en la tarjeta
        const tarjeta = boton.closest(".tarjeta");
        const nombre = tarjeta.dataset.titulo;
        const precio = Number(tarjeta.dataset.precio);

        // Agregamos un renglón a la lista del carrito
        const renglon = document.createElement("li");
        renglon.textContent = nombre + " - $" + precio;
        lista.appendChild(renglon);

        // Sumamos y mostramos el total
        total = total + precio;
        totalTexto.textContent = total;
    });
});

// 4. El botón "Vaciar" borra todo
document.querySelector("#vaciar").addEventListener("click", function () {
    lista.innerHTML = "";
    total = 0;
    totalTexto.textContent = total;
});
