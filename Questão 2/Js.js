{
    let n = parseInt(prompt("Informe um número:"))
    if((n < 0)||(n == 0)){
        alert("O valor deve ser positivo e diferente de zero.")
    }else{     
        for(hipotenusa = 1; hipotenusa <= n; hipotenusa++){
        var aux = 1;
            for(adjacente = 1; adjacente < hipotenusa; adjacente++){
                oposto = adjacente;
                while(adjacente*adjacente + oposto*oposto < hipotenusa*hipotenusa){
                    oposto++;
                }
                if (adjacente*adjacente + oposto*oposto == hipotenusa*hipotenusa) {
                    alert(`Hipotenusa: ${hipotenusa}\nCateto A: ${adjacente}\nCateto B: ${oposto}`)
                    aux = 2;
                }
            }
        }
    }
}   