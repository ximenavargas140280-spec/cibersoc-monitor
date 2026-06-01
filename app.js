const btnMonitorear = document.getElementById('btn-fetch');
const contenedorLogs = document.getElementById('panel-incidentes');

btnMonitorear.addEventListener('click', () => {

    fetch('incidentes.json')
        .then(response => response.json())
        .then(data => {
            contenedorLogs.innerHTML = "";

            data.incidentes.forEach(incidente => {
                const article = document.createElement('article');
                const titulo = document.createElement('h3');
                const servicio = document.createElement('p');
                const puerto = document.createElement('p');
                const amenaza = document.createElement('p');
                const mitigado = document.createElement('p');

                titulo.textContent = `Incidente: ${incidente.id}`;
                servicio.textContent = `Servicio: ${incidente.servicio}`;
                puerto.textContent = `Puerto: ${incidente.puerto}`;
                amenaza.textContent = `Amenaza: ${incidente.amenaza}`;
                mitigado.textContent = `Mitigado: ${incidente.mitigado ? "Si" : "No"}`;

                article.appendChild(titulo);
                article.appendChild(servicio);
                article.appendChild(puerto);
                article.appendChild(amenaza);
                article.appendChild(mitigado);
                contenedorLogs.appendChild(article);
            });
        })
        .catch(error => console.error("Error:", error));
});