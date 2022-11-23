interface IUser2 {
    username: string;
    interest?: string[]; // 可选属性
    readonly gender: "male" | "female"; // 只读属性
}

type User2 = {
    username: string;
    interest?: string[]; // 可选属性
    readonly gender: "male" | "female"; // 只读属性
};

// type 实际是类型别名 所以可以这样声明一个类型，它包 number 和 string
type ID = number | string;

// #region interface VS type
// 1. 扩展方式不同
type BlockedUser = User2 & {
    blocked: true; // 字面量类型 后文讲解
    blockReasons: string;
};

interface IBlockedUser extends IUser2 {
    blocked: true;
    blockReasons: string;
}
// 还是可以互相扩展 即 interface 基于 type 扩展，或 type 基于 interface 扩展
interface ISuperUser extends User2 {
    superPassword: string;
}
type SuperUser = IUser2 & {
    superPassword: string;
};

// 2. 声明合并 interface 可声明合并 type 不可修改
interface IUser2 {
    interest?: string[];
}
// type User2 = {
//     interest?: string[];
// }
// error: Duplicate identifier 'User2'

// #endregion
