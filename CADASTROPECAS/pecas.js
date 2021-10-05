let peso = 100;

if(peso >= 100){
    console.log("A peça possui um peso adequado, pode ser cadastrada!");
}else{
    console.log("A peça não possui um peso adequado e não pode ser cadastrada!");
}


// *** ARRAY verificado quantidade de peças ***
let listaPecas = ["disco de freio", "Amortecedor", "virabrequim", "vela", "bateria", "pneus", "cambio", "suspensão", "Radiador", "Correia"];

let numeroPecas = listaPecas;

if (numeroPecas < 10){
    console.log("A lista ainda possui espaço para mais peças");
}else{
    console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida")
}

// **** verificação de caracters ****
let nomePeca = "pem";

if( nomePeca.length > 3){
    console.log("nome da peça é válido, pode seguir com o cadastro!");
}else{
    console.log("nome da peça inválido, o nome precisa ter mais de 3 caracteres!");
}

