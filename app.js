// Captura de nodos interactivos del árbol DOM (Semana 1)
const btnMonitorear = document.getElementById('btn-fetch');
const contenedorLogs = document.getElementById('panel-incidentes');

// PROGRAMACIÓN ORIENTADA A EVENTOS: Escuchador asociado al clic del analista (Semana 2)
btnMonitorear.addEventListener('click', () => {
    
    // PETICIÓN ASÍNCRONA (AJAX): Consumo del archivo JSON local mediante Promesas
    fetch('incidentes.json')
        .then(response => response.json()) // Serialización de los datos de la respuesta
        .then(data => {
            contenedorLogs.innerHTML = ""; // Limpieza previa de la interfaz

            // DESAFÍO ALUMNO: Implementar el bucle iterativo (forEach) y utilizar funciones flecha (=>)
            // El alumno debe recorrer el arreglo "data.incidentes" e inyectar de forma dinámica 
            // componentes de tipo <article> modificando los nodos del DOM.

        })
        .catch(error => console.error("Excepción crítica en la lectura de logs:", error));
});