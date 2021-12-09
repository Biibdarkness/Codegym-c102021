let Circle = function (radius, color) {

    this.radius = radius;
    this.color = color
    this.getRadius = function () {
        return radius;
    }
    this.getColor = function () {
        return color;
    }
    this.getArea = function () {
        return Math.PI * radius * radius;
    }
};
let circle = new Circle(2, 'red');
let radius = circle.getRadius(); // 2
let color = circle.getColor();
let area = circle.getArea(); // 12.566370614359172 
console.log("radius: " + radius + "; area: " + area +"; color:" + color);

