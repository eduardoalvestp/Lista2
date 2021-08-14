const primo = (n) => {
    let divisores = 0
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            divisores++
        }
    }
    if(divisores == 2)
        return true
    return false
}

const decompor = (n) => {
    var primos = []
    for(let i = 1; i <= n; i++){
        if(primo(i))
            primos.push(i)
    }
    return alert(primos)
}

{
    let m = parseInt(prompt("Informe um valor para ser decomposto em números primos:"))
    if((m < 0)||(m == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        decompor(m)
    }
}