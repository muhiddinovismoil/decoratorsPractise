// Class Decorator
function oldClassDecorator(constructor: Function) {
    console.log(`Class decorated: ${constructor.name}`);
}

// Method Decorator
function oldMethodDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    console.log(`Method decorated: ${propertyKey}`);
}

// Property Decorator
function oldPropertyDecorator(target: any, propertyKey: string) {
    console.log(`Property decorated: ${propertyKey}`);
}

// Parameter Decorator
function oldParameterDecorator(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(
        `Parameter decorator ${propertyKey}, parameter index: ${parameterIndex}`
    );
}

@oldClassDecorator
class OldStylePerson {
    @oldPropertyDecorator
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @oldMethodDecorator
    greet(@oldParameterDecorator message: string) {
        console.log(`${this.name} says: ${message}`);
    }
}

const personOld = new OldStylePerson("Ali");
personOld.greet("Salom");
