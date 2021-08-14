{
    let m = parseInt(prompt("Informe um valor para m"))
    let n = parseInt(prompt("Informe um valor para n"))
    if((m < 0) || (m == 0) || (n < 0) || (n == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        let x, y;
        let valor;
        let xmax, ymax; 
        let valormax; 

        xmax = ymax = 0;
        valormax = 0; 

        for (x = 0; x <= n; x++){
            for (y = 0; y <= m; y++) 
            {
                valor = x*y - x*x + y;
                if (valor > valormax)
                {
                    valormax = valor;
                    xmax = x;
                    ymax = y;
                }
            }  
        }      
        alert(`Máximo da função: ${valormax} | x = ${xmax}, y = ${ymax} |`)
    }
} 