const input = document.getElementById("buscador");
const lista = document.getElementById("resultados");

fetch("temas.json")
  .then(res => res.json())
  .then(temas => {
    input.addEventListener("input", () => {
      const filtro = input.value.toLowerCase();
      lista.innerHTML = "";

      const filtrados = temas.filter(t =>
        t.titulo.toLowerCase().includes(filtro)
      );

      if (filtro !== "") {
        if (filtrados.length > 0) {
          filtrados.forEach(t => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = t.enlace;
            a.textContent = t.titulo;
            li.appendChild(a);
            lista.appendChild(li);
          });
        } else {
          const li = document.createElement("li");
          li.textContent = "No hay resultados";
          li.classList.add("sin-resultados");
          lista.appendChild(li);
        }
      }
    });
  });

