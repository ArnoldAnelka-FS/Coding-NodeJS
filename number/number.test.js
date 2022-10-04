const { add, 
        mul, 
        div, 
        sub, 
        max, 
        sqrt } = require("./number"); 
test('15 + 10 = 25', () => { expect(add(15, 10)).toBe(25);}); 
test('15 * 10 = 150', () => { expect(mul(15, 10)).toBe(150);}); 
test('15 / 10 = 1.5', () => { expect(div(15, 10)).toBe(1.5);}); 
test('15 - 10 = 5', () => { expect(sub(15, 10)).toBe(5);}); 
test('Math.max' , () => { expect(max(10, 50)).toBe(50);}); 
test('Math.sqrt' , () => { expect(sqrt(8)).toBe(2.8284271247461903);
});