class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.setName = function (name) {
            this.name = name;
        };
        this.setWeight = function (weight) {
            this.weight = weight;
        };
        this.getName = function () {
            return this.name;
        };
        this.getWeight = function () {
            return this.weight;
        };
        this.toString = function () {
            return `Tên: ${this.name}, cân nặng: ${this.weight} kg`;
        };
    }
};

let objAnimal1 = new Animal('Elephant', 45.6);
objAnimal1.toString();
console.log(objAnimal1.toString());
let objAnimal2 = new Animal('Cat', 4);
console.log(objAnimal2.toString());
objAnimal2.setName('Mouse');
console.log(objAnimal2.toString());