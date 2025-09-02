"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const numberBox = new Box(100);
console.log(numberBox.getValue());
const stringBox = new Box("Hello");
console.log(stringBox.getValue());
//# sourceMappingURL=Bai16.js.map