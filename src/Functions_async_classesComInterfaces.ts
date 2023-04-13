//** Funções */
//tipar parametros (type, type), e tipar o retorno (): type 
function addNumber(x: number, y: number): number {
    return x + y;
}
let soma: number = addNumber(8, 15);
console.log(soma);

function addToHello(name: string):string{
    return `Hello ${name}`;
}
console.log(addToHello("Oliver"));

//Parametros com mais de um tipo possível, pode especificar o retorno como => (): any ou ():number | string
function CallToPhone(phone: number | string){
    return phone;
}
console.log(CallToPhone("5578526"));


//** Funções asincrona/ async */
//Açucar sintatico, ele já entende que é preciso retornar uma Promise, quando mais explicito melhor, portanto especifique o tipo de dado a ser retornado
async function getDatabase(id: number): Promise<number | string>{
    return "dado retornado"
}


//** INTERFACES (type x interface) */
//além do objeto type é possível criar utilizando interface
interface robot{
    id: number | string;
    name:string;
    //readonly idade: number; 

    sayHello(): string;
}

const bot: robot = {
    id: 10,
    name: "robo",

    sayHello: function (): string{
        throw new Error("Function not implemented.")
    }
}


 console.log(bot);
 //não é possível modificar a propriedade, pois é somente leitura
 // console.log(bot.idade = 35);
 console.log(bot.name = "Joana");

 //molde de objeto
 class Pessoa implements robot{
     id: string | number;
     name: string;
     
    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }

     sayHello(): string {
         return ` hello i'm ${this.name}`;
     }
    }

    const person = new Pessoa(1, "Dante");
    console.log(person.sayHello());