const { Circle, Triangle, Square } = require('../lib/shapes');

// Tests for Circle
describe('Circle', () => {
    test('should render SVG for a circle', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toBe(/* Expected SVG string */);
    });
});

// Tests for Triangle and Square
describe('Triangle', () => {
    test('should render SVG for a triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toBe(/* Expected SVG string */);
    });
});
describe('Square', () => {
    test('should render SVG for a square', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toBe(/* Expected SVG string */);
    });
});
// Tests for ShapeFactory
describe('ShapeFactory', () => {
    test('should create a circle', () => {
        const factory = new ShapeFactory();
        const circle = factory.createShape('circle');
        expect(circle instanceof Circle).toBe(true);
    });
    test('should create a triangle', () => {
        const factory = new ShapeFactory();
        const triangle = factory.createShape('triangle');
        expect(triangle instanceof Triangle).toBe(true);
    });
    test('should create a square', () => {
        const factory = new ShapeFactory();
        const square = factory.createShape('square');
        expect(square instanceof Square).toBe(true);
    });
    test('should return null for unknown shape', () => {
        const factory = new ShapeFactory();
        const shape = factory.createShape('unknown');
        expect(shape).toBe(null);
    });
});