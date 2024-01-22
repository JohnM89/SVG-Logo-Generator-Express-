class Circle {
    constructor(radius) {
        this.radius = radius;
        this.color = '';
        this.withAnimation = false; // default will have no animation
    }

    setColor(color) {
        this.color = color;
    }

    setAnimation(withAnimation) {
        this.withAnimation = withAnimation;
    }

    render() {
        let animation = '';
        if (this.withAnimation) {
            // Heartbeat animation! scales up and down
            animation = `<animateTransform attributeName="transform" 
                         type="scale" 
                         values="1;1.33;1" 
                         begin="0s" 
                         dur="1s" 
                         repeatCount="indefinite"/>`;
        }

        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}">
                    ${animation}
                </circle>`;
    }
}


class Triangle {
    constructor(size) {
        this.size = size;
        this.color = '';
        this.withAnimation = false; // default will have no animation
    }

    setColor(color) {
        this.color = color;
    }

    setAnimation(withAnimation) {
        this.withAnimation = withAnimation;
    }

    render() {
        const height = this.size;
        const width = this.size * (Math.sqrt(3) / 2);
        const points = `150,${100 - height / 2} ${150 - width / 2},${100 + height / 2} ${150 + width / 2},${100 + height / 2}`;

        let animation = '';
        if (this.withAnimation) {
            animation = `<animateTransform attributeName="transform"
                         type="rotate"
                         from="0 150 100" to="360 150 100"
                         dur="5s"
                         repeatCount="indefinite"/>`;
        }

        return `<polygon points="${points}" fill="${this.color}">
                    ${animation}
                </polygon>`;
    }
}


class Square {
    constructor(size) {
        this.size = size;
        this.color = '';
        this.withAnimation = false; // default will have no animation
    }

    setColor(color) {
        this.color = color;
    }

    setAnimation(withAnimation) {
        this.withAnimation = withAnimation;
    }

    render() {
        const x = 150 - this.size / 2;
        const y = 100 - this.size / 2;

        let animation = '';
        if (this.withAnimation) {
            animation = `<animateTransform attributeName="transform"
                         type="scale"
                         from="1" to="1.5"
                         dur="3s"
                         repeatCount="indefinite"/>`;
        }

        return `<rect x="${x}" y="${y}" width="${this.size}" height="${this.size}" fill="${this.color}">
                    ${animation}
                </rect>`;
    }
}


class ShapeFactory {
    createShape(type, size) {
        switch (type) {
            case 'circle':
                return new Circle(size);
            case 'triangle':
                return new Triangle(size);
            case 'square':
                return new Square(size);
            default:
                return null;
        }
    }
}

module.exports = { ShapeFactory };
