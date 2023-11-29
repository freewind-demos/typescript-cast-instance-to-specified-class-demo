abstract class Base {
    constructor(public name: string) {
    }
}

class Child1 extends Base {
    constructor(public child1: string) {
        super(child1);
    }
}

class Child2 extends Base {
    constructor(public child2: string) {
        super(child2);
    }
}

const base: Base = new Child1('child1');

function castType<T>(obj: Base, targetType: new (...params: any[]) => T): T {
    if (obj.constructor.name === targetType.name) {
        return obj as any as T;
    } else {
        throw new Error(`Cannot cast '${obj.constructor.name}' to ${targetType.name}`)
    }
}

const child1 = castType(base, Child1);
console.log(child1.child1);


const child2 = castType(base, Child2);
console.log(child2.child2);


