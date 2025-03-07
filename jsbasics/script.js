        // text concatenation in js

        const button = document.querySelector("button");

            function greet() {
            const name = prompt("What is your name?");
            const greeting = document.querySelector("#greeting");
            greeting.textContent = `Hello ${name}, nice to see you!`;
            }

        button.addEventListener("click", greet);


        // output in the console

        console.log("Hello, World!")


        // declaring variables using let

        let name = "John";
        let surname = "Doe";

        console.log(name);
        console.log(surname);


        // re-assigning values to variables

        let age = 11;
        console.log(age); // 11

        age = 54;
        
        console.log(age); // 54


        // declaring constant values

        const pi = 3.14;

        console.log(pi); // 3.14


        // 1. Add 2 numbers together
        console.log(23 + 97); // 120


        // 2. Add 6 different numbers together
        console.log(4 + 15 + 27 + 9 + 33 + 12); //      


        // 3. Log the value of the given expression
        console.log((4 + 6 + 9) / 77); // ~0.24675

        // 4. Using variables
        let a = 10;
        console.log(a); // 10


        // 5. Reassigning a
        a = 20;
        console.log(a); // 20


        // 6. Using another variable b
        let b = 7 * a;
        console.log(b); // 7 * 20 = 140


        // 7. Working with constants
        const max = 57;
        const actual = max - 13;
        const percentage = actual / max;
        console.log(percentage); // ~0.7719



        // Execute until Infinity
        let myNumber = 2;
        while (myNumber != Infinity) {
        myNumber = myNumber * myNumber;
        }


        // operator precedeence
        (num2 + num1) / (8 + 2);


        let myDef = together;
        typeof myDef; // "undefined"




        // data types in js

        typeof undefined // "undefined"

        typeof 0 // "number"

        typeof 10n // "bigint"

        typeof true // "boolean"

        typeof "foo" // "string"

        typeof Symbol("id") // "symbol"

        typeof Math // "object"  (1)

        typeof null // "object"  (2)

        typeof alert // "function"  (3)


        // basic functions in js

        function whereToFindMe(Location) {
        return("You can find me at " + Location);
        }
        console.log(whereToFindMe("home"));


        // sum function 
        function add7 (a){
            return a + 7;
        }