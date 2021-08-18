const isPrimo = (number) => {
    var count = 0
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            count += 1
        }          
    }
    if(count == 2){
        return true
    }       
    return false
}

{
    let number = parseInt(prompt("Quantidade de números que deseja inserir:"))
    if((number < 0)||(number == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        let soma = 0
        for(let i = 1; i <= number; i++){
            let x = parseInt(prompt("Insira um número:"))
            if(isPrimo(x))
                soma += x
        }
        alert("Soma dos números primos inseridos: " + soma)
    }
}