const SUCCESS_TEXT: "success" = "success"; // 只能是 success
const SERVER_ERROR_CODE: 500 = 500; // 只能是 500
const objx: { x: true } = { x: true }; // 只能是 {x: true}

let string1: "success" = "success";
// 能够识别 string2 类型是 "success" 
const string2 = "success";

interface IRes {
    code: 200 | 400 | 401 | 403 | 404 | 500;
    status: "success" | "failure";
    data: any;
}

// 联合类型
type BookID = number | string; // 定义类型 是 number 或 string
type DemoType = true | "true" | 1 | "1";
type DemoType2 = string[] | "abcd" | string | (() => {});

declare const bookID: BookID;
// 联合类型 经过代码中的if分支后会自动缩窄类型
if (typeof bookID !== "number") {
    console.log(bookID.toString());
} else {
    console.log(bookID.toFixed());
}
