function calcular() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let adultos = parseInt(document.getElementById("adultos").value);
    let niños = parseInt(document.getElementById("niños").value);
    let dia = document.getElementById("dia").value;
    let precioAdulto = 29.9;
    let precioNiño = 19.9;
    let descuento = 0;

    if (dia === "Viernes" || dia === "Sábado" || dia === "Domingo") {
        descuento = 0.2;
    }

    if (nombre === "" || apellidos === "" || isNaN(adultos) || isNaN(niños) || dia === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    adultos = isNaN(adultos) ? 0 : adultos;
    niños = isNaN(niños) ? 0 : niños;

    let precioTotal = (adultos * precioAdulto + niños * precioNiño) * (1 - descuento);

    let detalleReserva =
        "<h3>Detalles de la Reserva</h3>" +
        "<p><b>Reserva realizada por:</b> " +
        nombre +
        " " +
        apellidos +
        "</p>" +
        "<p><b>Número de adultos:</b> " +
        adultos +
        " (Precio por adulto: " +
        precioAdulto.toFixed(2) +
        " €)</p>" +
        "<p><b>Número de niños:</b> " +
        niños +
        " (Precio por niño: " +
        precioNiño.toFixed(2) +
        " €)</p>" +
        "<p><b>Día de la reserva:</b> " +
        dia +
        "</p>" +
        "<p><b>Precio total:</b> " +
        precioTotal.toFixed(2) +
        " €</p>" +
        "<h3>¡Gracias por su reserva!</h3>";

    document.getElementById("reserva").innerHTML = detalleReserva;
}

function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("adultos").value = "";
    document.getElementById("niños").value = "";
    document.getElementById("dia").selectedIndex = 0;
    document.getElementById("reserva").innerHTML = "";
}