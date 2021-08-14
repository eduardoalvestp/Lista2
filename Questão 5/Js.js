const getImpares = (m) => {
    var i, j, soma;
    var result = Math.pow(m, 3)
    for (n = 1; n <= m; n++) {
        soma = 0;
        numbers = []
        for (j = 1; soma != n*n*n; j += 2) {
            soma = 0;
            numbers = []
            for (i = 0; i < n; i++){
                soma = soma + j + 2 * i;
            }      
        }
        j = j - 2;
        for (i = 0; i < n; i++){
            numbers.push(j+2*i)
        }
        let string = `Resultado:\n${n}³ = ${numbers} = ${n*n*n} (:`
        string = string.replace(/,/g, ' + ')
        console.log(string)
    }
}

{
    let m = parseInt(prompt("Informe um valor para ser elevado a n³"))
    if((m < 0)||(m == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        getImpares(m)
    }
}