//** TRABALHANDO COM CLASSES */

/* ** modificadores de acesso => data modifiers
* public = > é possível acessar a propriedade da classe dequalquer lugar
* private => só é possível acessar a propriedade na classe que ele foi criada
*protected => é possível acessar a propriedade na classe criada e nas que herdarão
*/

//SuperClass/ classe pai
class Character {
    //o name fica com erro se não adicionar valor, para reutilizar é preciso adicionar um ponto de interrogação deixando opcional
    //utilizando o private:
    private name?: string;
    stregth: number;
    skill: number;

    //tbm é possível passar o name no constructor recebendo o valor do nome do personagem ou deixar o ?
    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    
    //DATA MODIFIELS tbm são possíveis usar nos métodos da classe
    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}

//com private só será possível acessar com a chamada daclasse
const player = new Character("propriedade NOME só aqui", 10, 88);
player.skill = 20;
console.log(player);
player.attack();



//** HERANÇA, SUBCLASS que herdará as propriedades de Character */
class Magician extends Character{
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number,  magicPoints: number){
        super(name, stregth, skill);
        this. magicPoints = magicPoints;
    }
}

const player2 = new Magician("Mago", 0.8, 30, 100);
console.log(player2);