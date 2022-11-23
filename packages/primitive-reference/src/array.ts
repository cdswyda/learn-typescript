const arr1: number[] = [1];
const arr2: Array<number> = [1];

console.log(arr1[100] + arr2[100]); // ???

// readonly Array Elements
let arr3: ReadonlyArray<number> = [1];
let arr4: readonly number[] = [1];
// arr3[0] = 2; // error: Index signature in type 'readonly number[]' only permits reading
// arr4.push(1); // error: Property 'push' does not exist on type 'readonly number[]'
arr3 = [2]; // ok
arr4 = [2]; // ok

// readonly 的修饰不会在赋值时传递
let arr11: readonly number[] = [11];
let arr12: number[] = [22];

arr11 = arr12; // OK arr11 仍然是 readonly
arr12 = arr11; // error
arr12 = [123]; // ok
