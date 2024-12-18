// Class Decorator
function newClassDecorator() {
    return (constructor: any) => {
        console.log(`New-style class decorator for: ${constructor.name}`);
    };
}

// Method Decorator
function newMethodDecorator() {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        console.log(`New-style method decorator for: ${propertyKey}`);
    };
}

// Property Decorator
function newPropertyDecorator() {
    return (target: any, propertyKey: string) => {
        console.log(`New-style property decorator for: ${propertyKey}`);
    };
}

// Parameter Decorator
function newParameterDecorator() {
    return (target: any, propertyKey: string, parameterIndex: number) => {
        console.log(
            `New-version parameter decorator for: ${propertyKey}, parameter index: ${parameterIndex}`
        );
    };
}

@newClassDecorator()
class NewStylePerson {
    @newPropertyDecorator()
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @newMethodDecorator()
    greet(@newParameterDecorator() message: string) {
        console.log(`${this.name} says: ${message}`);
    }
}

const personNew = new NewStylePerson("Hursand");
personNew.greet("Salom !");
