<?php
// CONTROL DE ACCESO WEB: Validación del método de transferencia HTTP (Semana 3)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // SINTAXIS PHP: Las variables deben iniciar obligatoriamente con el símbolo $
    $id_reporte = "REP-" . rand(100, 999);
    
    // DESAFÍO ALUMNO: Capturar los parámetros enviados por el formulario HTML
    // El estudiante debe enlazar las claves utilizando la súper-global $_POST
    $nombre_amenaza = $_POST['amenaza_input'];
    $puerto_afectado = $_POST['puerto_input'];

    // SENTENCIA DE SALIDA: Renderizado dinámico desde el servidor hacia el cliente
    echo "<h2 style='color:#002D72;'>🚨 Registro de Incidente Exitoso (Backend PHP)</h2>";
    echo "<p><strong>ID de Seguimiento Único:</strong> " . $id_reporte . "</p>";
    echo "<p><strong>Amenaza Identificada por el Analista:</strong> " . $nombre_amenaza . "</p>";
    echo "<p><strong>Puerto de Red Asegurado en Localhost:</strong> " . $puerto_afectado . "</p>";
    echo "<br><br><a href='index.html' style='color:#B40000; font-weight:bold;'>Volver al Monitor SOC</a>";

} else {
    // Mitigación de accesos directos por URL (Método GET no autorizado para esta transacción)
    echo "Error Crítico: Petición HTTP no autorizada mediante método GET.";
}
?>