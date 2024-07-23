function calculateTip() {
    // :)
    const amt = document.getElementById('amt').value;
    const tipper = document.getElementById('tipper').value;

    // Calcula la propina
    const tipAmount = (amt * tipper) / 100;

    // Muestra el resultado de la propina calculada
    document.getElementById('tipRes').innerText = `L ${tipAmount.toFixed(2)}`;
}