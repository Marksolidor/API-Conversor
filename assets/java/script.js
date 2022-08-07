let moneySelection = document.querySelector("#selector");
let inputCLP = document.querySelector("#clp");
const mindiURL = "https://mindicador.cl/api/";

async function getMonedas() {
   try { 
    currency = moneySelection.value //Get the name in the selector for search it in the API
    const res = await fetch(`${mindiURL}${currency}`);
    const data = await res.json();
    console.log(res.status);
    console.log(res)
    console.log(currency)
    console.log(data)
   } catch (e) {
    console.error(e);
    alert("No pudimos resolver tu petición");
    return {};
}
};