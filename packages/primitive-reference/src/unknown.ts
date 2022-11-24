// any vs unknown
let anyVar1: any;
anyVar1 = "abc";
anyVar1 = 1;
anyVar1 = false;
anyVar1 = { a: 1 };
anyVar1 = [];
anyVar1 = null;

anyVar1.sayHellow(); // 没有错误

let unknownVar1: unknown;
unknownVar1 = "abc";
unknownVar1 = 1;
unknownVar1 = false;
unknownVar1 = { a: 1 };
unknownVar1 = [];
unknownVar1 = null;

// unknownVar1.sayHellow(); // error: Property 'sayHellow' does not exist on type 'unknown'

