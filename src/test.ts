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