// object 可以是所有的 object 类型
const o1: object = undefined; // strictNullChecks 为 false 支持
const o2: object = [];
const o3: object = null; // strictNullChecks 为 false 支持
const o4: object = /123/;
const o5: object = () => {};
const o6: object = {};

// 下面这些也全部支持
const o7: Object = NaN;
const o8: Object = "";
const o9: Object = 123;
const o10: Object = true;

// Object 相对 object 范围更广
const o11: Object = undefined; // strictNullChecks 为 false 支持
const o21: Object = [];
const o31: Object = null; // strictNullChecks 为 false 支持
const o41: Object = /123/;
const o51: Object = () => {};
const o61: Object = {};

// 与 Object 类似的还有 String Number Boolean Symbol 等装箱类型
// 如 String 实际包包含了 undefined、null、void，以及代表的 拆箱类型（Unboxed Types） string
const s1: String = "123";
const s2: String = null;
const s3: String = undefined;
const s4: String = void true;
const s5: String = new (class MyString extends String {})("111");

// 啥都不能干的 {}
let emptyObj1: {} = true;
let emptyObj2: {} = "1";
let emptyObj3: {} = 1;
let emptyObj4: {} = Symbol("1");
let emptyObj6: {} = undefined;
let emptyObj7: {} = null;
let emptyObj8: {} = { age: 1 };
let emptyObj9: {} = [1];

emptyObj8.age = 123; // error: Property 'age' does not exist on type '{}'
emptyObj9.push(1); // error: Property 'push' does not exist on type '{}'

// emptyObj
