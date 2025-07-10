const prInput = document.getElementById("principal"); //aporte inicial
const rateInput = document.getElementById("rate"); //taxa anual
const yearsInput = document.getElementById("years"); //anos
const monthInput = document.getElementById("month"); //meses 
const resultEl = document.querySelector(".result"); //paragrafo onde vai estar o resultado 


function calculate() {
    const P = prInput.valueAsNumber;
    const M = monthInput.valueAsNumber;
    const Y = yearsInput.valueAsNumber * 12;
    const R = rateInput.valueAsNumber / 100 / 12;

    const montanteP = P * Math.pow(1 + R, Y);
    const montanteM = M * ((Math.pow(1 + R, Y) - 1) / R);
    const A = montanteP + montanteM;

    const valorFormatado = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(A);

    resultEl.textContent = `Apos ${yearsInput.valueAsNumber} ano(s), você terá ${valorFormatado}`;
}
