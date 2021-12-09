class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
        this.getRadius = function() {
            return radius;
    };
    }
    };
        this.getRadius = function() {
            return radius;
    };
        this.getColor = function() {
            return color;
        }
        this.getArea = function() {
            return Math.PI * this.radius * this.radius;
};
let circle = new Circle(2, 'red');
let radius = circle.getRadius();
let area = circle.getArea();
console.log(area)