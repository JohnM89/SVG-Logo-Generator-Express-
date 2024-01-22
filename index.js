const fs = require('fs');
const { ShapeFactory } = require('./Develop/lib/shapes');
// function to generate the SVG file
function generateSvg({ text, textColor, textSize, shape, shapeColor, shapeSize, backgroundColor, withAnimation }) {
    const shapeFactory = new ShapeFactory();
    const shapeInstance = shapeFactory.createShape(shape, shapeSize);
    if (!shapeInstance) {
        console.error('Invalid shape type');
        return;
    }

    shapeInstance.setColor(shapeColor);
    shapeInstance.setAnimation(withAnimation); // set the animation flag

    const shapeSvg = shapeInstance.render();

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: ${backgroundColor};">
                            ${shapeSvg}
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${textSize}px">
                                ${text}
                            </text>
                        </svg>`;

    try {
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error saving the SVG file:', error);
    }
}


function promptUser() {
    import('inquirer').then(module => {
        const inquirer = module.default;
        inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters.'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color for the text (keyword or hex):',
                default: 'black'
            },
            {
                type: 'input',
                name: 'textSize',
                message: 'Enter the size for the text (in pixels):',
                default: '20',
                validate: input => !isNaN(input) && input > 0 ? true : 'Please enter a valid number greater than 0.'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for the logo:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeSize',
                message: 'Enter the size for the shape (in pixels):',
                default: '50',
                validate: input => !isNaN(input) && input > 0 ? true : 'Please enter a valid number greater than 0.'
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color for the shape (keyword or hex):',
                default: 'blue'
            },
            {
                type: 'confirm',
                name: 'withAnimation',
                message: 'Do you want to add animations to the shape?',
                default: false
                },
            {
                type: 'input',
                name: 'backgroundColor',
                message: 'Enter a background color for the logo (keyword or hex):',
                default: 'white'
            }
        ]).then(answers => {
            generateSvg(answers);
        });
    });
}

promptUser();