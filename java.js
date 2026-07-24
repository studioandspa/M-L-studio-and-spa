const botones = document.querySelectorAll(".accordion-btn");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const contenido = boton.nextElementSibling;

        if (contenido.style.display === "block") {

            contenido.style.display = "none";
            boton.querySelector("span").textContent = "+";

        } else {

            contenido.style.display = "block";
            boton.querySelector("span").textContent = "−";

        }

    });

});