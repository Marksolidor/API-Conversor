let moneySelection = document.querySelector("#selector");
let inputCLP = document.querySelector("#clp");
const mindiURL = "https://mindicador.cl/api/";
let onDateValue = 0;
let calculator = document.querySelector("#search");

//Async Data 
async function getMonedas() {
   try { 
    currency = moneySelection.value //Get the name in the selector for search it in the API
    const res = await fetch(`${mindiURL}${currency}`);
    const data = await res.json();
    onDateValue = data.serie[0].valor;
    console.log(res.status);
    console.log(res)
    console.log(currency)
    console.log(data)
    console.log(onDateValue.value)
    return data;
   } catch (e) {
    console.error(e);
    alert("No pudimos resolver tu petición");
    return {};
}
};

//Calculator
calculator.addEventListener("click", (e) => {
    let conversion = Number((inputCLP.value / onDateValue).toFixed(2));
    document.querySelector("#result").innerHTML = conversion;
    console.log(conversion);
    getMonedas()
})   