//** declarando e tipando variaveis:
//primitivos:
let ligado: boolean = false;
let nome: string = "Bia";
let idade: number = 30;
let altura: number = 1.90;

//variaveis especiais, com valores inalteraveis
let nulo: null = null;
let indefinida: undefined = undefined;

//tipos abrangente any(aceita qlqr coisa), void(vazio, não retorna nada)
let semRetorno:void;
let retornoView: any = false;

//** OBJETO
//object é possível usar quando vc não tem uma forma muito bem definida => sem previsibilidade
let produto: object = {
    name: "Beatriz",
    cidade: "Campinas",
    idade: 29,
};

//especificando objetos de forma correta, 1.cria-se um tipo
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}
//2. e depois o objeto a partir dele => Objeto tipado com previsibilidade
let meuProduto: ProdutoLoja = {
    nome: "Sandália",
    preco: 129.99,
    unidades: 5,
}

//** Arryas */
//duas formas de criar um vetor/array:
let dados: string[] = ["Ana", "Joana", "Felipe"];
let dados2: Array<string> = ["Ana", "Joana", "Felipe"];

//tipos diferentes
let infos: (string | number)[] = ["Bia", 29]

// TUPLAS => array de varios tipos com a ordem especifica, onde eles deveram aparecer
let boleto: [string, number, number] = ["Texto", 29, 30];
//métodos de ARRAYS
    /* ! dados.map();
        dados.reduce();
        dados.filter();
        dados.pop();
        dados.push(); */

//** tipo Date */
let aniversario: Date = new Date("2023-08-06 08:35");
console.log(aniversario.toString());

