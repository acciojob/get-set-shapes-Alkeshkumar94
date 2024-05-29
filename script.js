class Rectangle { // Here we define the Rectangle class
    constructor(width, height) { // Here we define the constructor function for Rectangle
        this._width = width;
        this._height = height;
    }
    get width() {  
        return this._width;
    }
    get height() {
        return this._height;  
    }
    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Here we call the constructor of the parent class Rectangle
    }
    getPerimeter() {
        return 4 * this._width;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
