// Función para dividir dos números
function dividir(a, b) {
    // Verificar que el divisor no sea 0
    if (b === 0) {
        console.log("Error: No se puede dividir entre 0");
        return null;
    }

    return a / b;
}

// Ejemplo de uso
let resultado = dividir(10, 2);
console.log("Resultado:", resultado);