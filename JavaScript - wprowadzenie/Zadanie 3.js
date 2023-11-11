//czesc 1
//Wyliczanie n-tej (parametr funkcji) liczby z szeregu Fibonacciego
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(7));

//Sprawdzanie, czy podany jako argument łańcuch tekstu jest palindromem
function palindrome(str) {
    const formatStr = str.toLowerCase();
    const reversedStr = formatStr.split('').reverse().join('');
    return formatStr === reversedStr;
}

console.log(palindrome('KAjak'));

//Określanie nazwy typu dla przekazanego do funkcji argumentu
function checkType(arg) {
    return typeof arg;
}

console.log(checkType('string'));

// Konwertowanie wartości całkowitej na kolekcję monet o zadanych (jako tablica) dostępnych nominałach
function zad4(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

console.log(zad4(46,[25, 10, 5, 2, 1]));

//czesc 2
class Vehicle {
    constructor(firm, model) {
        this.firm = firm;
        this.model = model;
    }

    get name() {
        return this.firm;
    }

    get variaty() {
        return this.model;
    }

    set name(firm) {
        this.firm = firm;
    }

    set variaty(model) {
        this.model= model;
    }
}

class Car extends Vehicle {
    constructor(firm, model, numDoors) {
        super(firm, model);
        this.numDoors = numDoors;
    }

    get num() {
        return this.numDoors;
    }

    set num(numDoors) {
        this.numDoors = numDoors;
    }
}

const car = new Car('Mercedes-Benz', 'S-class', 5);

console.log("Marka pojazdu: ", car.name);
console.log("Model pojazdu: ", car.variaty);
console.log("Liczba drzwi: ", car.num);

car.name = 'Audi';
car.variaty = 'RS6';
car.num = 5;

console.log("Nowa marka pojazdu: ", car.name);
console.log("Nowy model pojazdu: ", car.variaty);
console.log("Nowa liczba drzwi: ", car.num);























