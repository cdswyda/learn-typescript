// 方式1 函数声明 直接在函数上进行标注
function add(a: number, b: number): number {
    return a + b;
}
// 方式2 函数表达式 上在函数上声明
const add2 = (a: number, b: number): number => a + b;
// 方式3 函数表达式 但是给变量标记整体的类型
const add3: (a: number, b: number) => number = (a, b) => a + b;

// type 和 interface 来描述函数类型
type AddFun = (a: number, b: number) => number;
interface AddFunStruct {
    (a: number, b: number): number;
}

const add4: AddFun = (a, b) => a + b;
const add5: AddFunStruct = (a, b) => a + b;

// return type
function div(a: number, b: number) {
    return a / b;
}
// div 为标注返回类型，但ts可以识别返回类型为 number

// 没有return 语句的函数
function someFun1(): void {}
// return 只是用来中断跳出的函数
function someFun2(type: string): undefined {
    if (type === "xx") {
        // do something
        return;
    } else if (type === "yy") {
        return;
    }
    return;
}

// 可选参数
function add7(a: number, b: number, c?: number): number {
    if (c) {
        return a + b + c;
    }
    return a + b;
}

// 剩余参数
function sum(...args: number[]): number {
    return args.reduce((a, b) => a + b);
}

// 函数重载
interface IUrlParams {
    [key: string]: string;
}
function getUrlParams(): IUrlParams;
function getUrlParams(url?: string): IUrlParams;
function getUrlParams(url?: string, key?: string): string | null;
function getUrlParams(url?: string, key?: string): string | null | IUrlParams {
    var realUrl = url ? url.split("?")[1] : window.location.search.slice(1);
    var search = new URLSearchParams(realUrl);
    if (key) {
        return search.get(key);
    }
    var object = {};
    search.forEach((k) => (object[k] = search.get(k)));
    return object;
}

// 异步
function asyncFunc1(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("asyncFunc1");
        }, 3000);
    });
}

async function asyncFunc2(): Promise<{ [key: string]: string }> {
    const value1 = await asyncFunc1();
    const value2 = await asyncFunc1();
    const value3 = await asyncFunc1();
    return {
        value1,
        value2,
        value3,
    };
}
