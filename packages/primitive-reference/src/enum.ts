enum Gender {
    male,
    female,
}

var a = Gender.male;
var b = Gender.female;

enum UserRole {
    unVerify = 1,
    user = 10,
    moderator = 15,
    admin = 20,
    superAdmin,
    sysAdmin,
}

enum SystemPageUrl {
    Home = "/home/",
    User = "/user/",
    Admin = "/admin/"
}
