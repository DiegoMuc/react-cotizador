export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case "1":
            incremento = 3.30;
            break;
        case "2":
            incremento = 3.15;
            break;
        case "3": 
            incremento = 3.05;
            break;
        case "4":
            incremento = 2.30;
            break;
        case "5":
            incremento = 2.15;
            break;
        case "6": 
            incremento = 2.05;
            break;
        case "7":
            incremento = 1.30;
            break;
        case "8":
            incremento = 1.15;
            break;
        default:
            break;
    }
    return incremento;
}

export function calcularPlan( plan ) {
    return (plan === "1") ? 1.20 : 1.50
}

export function formatearDinero( cantidad ) {
    return cantidad.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}
