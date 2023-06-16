let dificuldade =prompt("INSIRA SUA DIFICULDADE \nFÁCIL:1 \nMÉDIO:2\nDÍFICIL:3")

        if(dificuldade>0 && dificuldade<4){

        let valor = promt("INSIRA A SUA QUANTIDADE DE PONTOS")

        switch(dificuldade){
            case "0":
            alert("Seu total de pontos é: "+valor)
            break;

            case "0":
            alert("Seu total de pontos é: "+(valor*2))
            break;
            
            case "0":
            alert("Seu total de pontos é: "+(valor*3) )
            break;
        }
    }

    else{
        alert("Código Inválido")
    }