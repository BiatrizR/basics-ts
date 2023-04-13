//** GENERICS */
//para especificar o retorno de um array de uma forma genérica/dinêmica, onde incialmente ele pode conter dados
//de tipos diferentes, mas no retorno serão tipos especificos, pode-se usar o tipo genérico: <T>
function concatArray<T>(...itens: T[]) :T[]{
        return new Array().concat(...itens);
}

//ao recber o valor passa-se o tipo/ ficando dinâmico
const numArray = concatArray<number[]>([1,5], [7, 3]);
const stgArray = concatArray<string[]>(["Joana", "goku", "Hagnaroke"], ["Pedro"]);

console.log(numArray);
console.log(stgArray);

//** DECORATORS */
//decora um metodo e adiciona um gatilho ára executar a ação com o @/EVENTO 
// ativar experimentalDecorators no tsconfig

function ExibirNome(target: any){
    console.log(target)}

@ExibirNome
class NomesFuncionarios{}

//Ex.: Criar um decorators para documentar versão de uma api
function apiVersion(version: string){
    return (target: any) =>{
        Object.assign(target.prototype, {__version: version, __name: "api decoration"});
    }
}

//@apiVersion("1.10")
//class Api{}

//attribute decorator
//supondo que pra cada nome de api, seja exigido mais dminimo de caracteres
function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];
        
        const getter = () => "[getter aqui]" + _value;
        const setter = (value: string) => {
            if(value.length < length){
                throw new Error(` Tamanho meno do que ${length}`);
            } else {
                _value = value;
            }
        }; 

        Object.defineProperty(target, key, {
            get: getter, 
            set:setter
        })
    };
}
class Api{
    // o tamanho pode ser alterado no parametro
    @minLength(3)
    name: string
    constructor(name:string){
        this.name = name;
    }
}

//criando a api com nome maior q 3
const api = new Api("produtos");
console.log(api.name);

//criando a api com nome menor q 3
const api2 = new Api("pri");

//console.log(api.__version);
//console.log(api.__name); 
console.log(api2.name);

//Basicamente o decorators serve para setar ações e modificações, regras na implementação.