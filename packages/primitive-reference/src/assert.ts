// const app: HTMLElement = document.getElementById("app"); // error: Type 'HTMLElement | null' is not assignable to type 'HTMLElement'
// app.style.height = "100vh"; // error:  Object is possibly 'null'

const app: HTMLElement = document.getElementById("app")!;
app.style.height = "100vh"; // ok
