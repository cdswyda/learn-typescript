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
