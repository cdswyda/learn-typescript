let username: string = 'zhangsan';
let age: number = 30;
let booleanValue: boolean = false;
let undefValue: undefined = undefined;
let nul: null = null;
let obj: object = { username, age };
let bigintVar1: bigint = 9007199254740991n;
let bigintVar2: bigint = BigInt(9007199254740991);
let symbolVar: symbol = Symbol('unique');

let tmp1: null = null;
let tmp2: undefined = undefined;

// 以下两个仅在关闭 strictNullChecks 时成立
// let tmp3: string = null;
// let tmp4: string = undefined;

// 指定了类型就不能再赋值其他类型，将会引发 error
// username = 123;
// age = '30';
// booleanValue = 'false';
// undefValue = 'undefined';
// nul = 'null';
// obj = [name, age]; // tips
// bigintVar1 = 9007199254740991;
// symbolVar = Math.random().toString();


// 关于 obj: object 的赋值问题，如果需要只能允许特定的 k-v 需要如下处理：
type User = {
    username: string;
    age: string;
}
interface IUser {
    username: string;
    age: string;
}


