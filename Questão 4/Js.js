const checaPrimo = (number) => {
    var count = 0
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            count += 1
        }          
    }
    if(count == 2){
        alert("Esse número é primo")
        return
    }       
    alert("Esse número não é primo")
}

{
    let number = parseInt(prompt("Quantidade de números que deseja inserir:"))
    if((number < 0)||(number == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        for(let i = 1; i <= number; i++){
            let n = parseInt(prompt("Verificar se o número é primo:"))
            checaPrimo(n)
        }
    }
}