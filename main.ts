function log(message: string) {
    console.log(message);
}

log('Hello World');

function dosomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
dosomething();

// data types
let a: number=12;
let b: boolean=true;
let c: string='we'
let d: any=12;
let e: number[] = [1, 2, 3];

let arr:any[] = [1, true, 'a', false];

// enum

enum Color {Red, Green, Blue};
let backgroundColor = Color.Blue;

// type assertions
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c'); // type assertions
let alternativeway = (message as string).endsWith('c'); // type assertions

// arrow functions


let dolog= (message1)=>{
    console.log(message1);
}

dolog('arrow function');





//interfaces

let arrow=(x:number,y:number)=>{
    return x+y;
}

arrow(2,4)
