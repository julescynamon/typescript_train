const a: string = "hello world";
const n: number = 10;
const b: boolean = true;

const o: object = { a: 1, b: 2 };
const user: {firstName: string, [key: string]: string} = {
    firstName: "john"
    lastName: "doe"
}
const user: {firstName: string, lastName: string, age: number} = {
    firstName: "john"
    lastName: "doe"
    age: 30
}

const a2: Array<number> = [1, 2, 3];
const a3: number[] = [1, 2, 3];
const a4: Array<string> = ["a", "b", "c"];
const a5: string[] = ["a", "b", "c"]; 
const date: Date = new Date();
// void siginifie que la fonction ne retourne rien
const cb: Function = (e: MouseEvent): void {
    console.log(e);
}

function printId(id: number): void{
    console.log(id);
}

function printIdTwo(id: number | string): void{
    console.log(id);
}

const button = document.querySelector("#compteur") as HTMLButtonElement;
// le point d'exclamation signifie que je suis sur que ca ne peut pas etre null
const buttonID = document.querySelector("#compteur")!;

// c'est deux ligne du haut c'est du narrowing

// creer un type pour ne pas se repeter
type Users = {firstName: string, lastName: string};
const users: Users = {
    firstName: "John",
    lastName: "Doe"
}

// exemple de type reutilisable
type User = {firstName: string, lastName: string};
type UserWithAge = User & {age: number};
type Date = string;
type uid = string | number;

// Les génériques

function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}

const aa = identity<number>(3);

// type avec une contrainte qui permet de forcer le type du generique
function consoleSize<Type extends {length: number}> (arg: Type): Type {
    console.log(arg.length);
    return arg;
}

const aab = consoleSize(3);

// type qui dépend d'un autre 
type Key = keyof Users;

// extraire un type a partir de quelquechose qui existe
const userInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}
type UserInfo = typeof userInfo;

// appliquer un readonly permet de psecifier que ca ne peut pas etre modifier
function reverse<T>(arr: readonly T[]): T[]{
    // return arr.reverse();
    // donc on ne pourra pas utiliser reverse() car ca modifie le tableau
    // donc pour resoudre le proble on utilise le spread orperator
    return [...arr].reverse();
}

// utilisation des classes avec typescript
class User {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class A {
    // visibilite priver on peut y acceder qu'a l'interieur de la class
    private a = 3;
    log(){
        console.log(this.a);
    }
    // visibilite proteger on peut y acceder qu'a l'interieur de la class et des classes qui en herite
    protected b = 4;

    // visibilte public on peut y acceder de n'importe ou
    public c = 5;
}
const aInstance = new A();
// on ne peut pas y acceder car c'est private
console.log(aInstance.a);
// mais si on appel la fonction log() on peut acceder a a car log n'est pas private
aInstance.log();

class B extends A {
    // on peut acceder a this.b car B herite de A
    c = this.b;
}

// on peut acceder a c car c'est public
console.log(aInstance.c);

// mise en place d'une class geometric de type abstract ce qui signifie que ce sont les enfants de cette classe qui l'implementeront
abstract class Geometric {
    x = 0;
    y = 0;
    abstract surface(): number;
}

class Rectangle extends Geometric {
    width = 3;
    height = 3;
    surface(){
        return this.width * this.height;
    }
}

// les interfaces
interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const user: User = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

// Les types
// peut utiliser les types primaires mais ne peut etre redefinie

// les interfaces
// peut etre etendue et peut etre redefinie

// par convention on va utiliser toujours les types par default etant donne que c'est ceux qui permette de typer le plus de choses et si par contre des fois j'ai besoin de definir la forme d'un objet et que je sais que je vais devoir utiliser implements ou que je sais que je fais une librairie qui va pouvoir etre etendu et que j'ai besoin de laisser les choses ouvertes alors j'utilise les interfaces.

// utilisation de unknown plutot que any pour dire que l'on connait pas encore le type mais que plus tard on definira le type
function a(arg: unknown) {
    if (arg instanceof HTMLInputElement){
        arg.value = "hello world"
    }
}