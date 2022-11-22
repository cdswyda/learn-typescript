// object 可以是所有的 object 类型 
const o1: object = undefined; // strictNullChecks 为 false 支持
const o2: object = [];
const o3: object = null; // strictNullChecks 为 false 支持
const o4: object = /123/;
const o5: object = () => {};
const o6: object = {};

// 下面这些也全部支持
const o7: Object = NaN;
const o8: Object = '';
const o9: Object = 123;
const o10: Object = true;

// Object 相对 object 范围更广
const o11: Object = undefined; // strictNullChecks 为 false 支持
const o21: Object = [];
const o31: Object = null; // strictNullChecks 为 false 支持
const o41: Object = /123/;
const o51: Object = () => {};
const o61: Object = {};


// Object 可直接写作{}
const obj11: {} = true; 