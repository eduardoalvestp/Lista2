{
    let n = parseInt(prompt("Informe um valor seguido de 0:"))
    if((n < 0)||(n == 0) || (n % 10 != 0)){
        alert("O valor deve ser positivo, diferente de zero e deve possuir um zero no final.")
    }else{
        var sum = 0;
        for(let i = 0; i < n; i++){
            if (i % 2 == 0) {
                sum += i
            }
        }
        alert(sum);
    }
}