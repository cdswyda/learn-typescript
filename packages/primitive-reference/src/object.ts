interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    birth: Date;
}

const taylor: IPerson = {
    firstName: "Taylor",
    lastName: "Swift",
    age: 33,
    birth: new Date("1989-12-13"),
};

setInterval(() => {
    const d = new Date().getTime() - taylor.birth.getTime();
    const ageDate = new Date(d);
    taylor.age = ageDate.getUTCFullYear() - 1970;
    console.log(taylor);
}, 1000 * 60 * 60 * 24);

// 可选和只读属性
interface IUser {
    username: string;
    interest?: string[]; // 可选属性
    readonly gender: "male" | "female"; // 只读属性
}

const zhangsan: IUser = {
    username: "张三",
    gender: "male",
    // 可以没有 interest 属性
};

// zhangsan.gender = "female"; // error 不能被再赋值

// 可选属性操作前要先有判断 类型断言
const lisi: IUser = {
    username: "张三",
    gender: "male",
    interest: ["reading", "game"],
};
// lisi.interest.push("coding"); // error: Object is possibly 'undefined'
// zhangsan.interest.push("coding"); // error: Object is possibly 'undefined'

(lisi.interest as string[]).push("coding");
(<string[]>lisi.interest).push("coding");

if (!zhangsan.interest) {
    zhangsan.interest = ["codding"];
} else {
    zhangsan.interest.push("coding");
}
