let nomeEstudante = "Helena";
console.log(nomeEstudante);

const nomeDoEstudante = "Helena";
console.log(nomeEstudante);

// **** Contagem do Array ****
let listaDeEstudante = ["Helena","Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudante.length;
console.log(quantidadeDeEstudantes);

// **** Rotina FOR ****
let listaDeEstudantes1 = ["Helena","Chico", "Mário", "FIM"];
let quantidadeDeEstudantes1 = listaDeEstudantes1.length;
for (let indice = 0; indice < quantidadeDeEstudantes1; indice++){
    const alunoCorrente = listaDeEstudantes1[indice];
    console.log(alunoCorrente);
}

// **** Rotina DO e WHILE **** (aproveitamento codigo anterior)
let inicio = 0;
do {
    console.log(listaDeEstudantes1[inicio]);
    inicio++;
} while (inicio < quantidadeDeEstudantes1);

while (inicio < quantidadeDeEstudantes1){
    console.log(listaDeEstudantes1[inicio]);
    inicio++;
}

//  **** contagem até 10 com o FOR ****
for (let numero = 1; numero <= 10; numero++){
    console.log(numero);
}