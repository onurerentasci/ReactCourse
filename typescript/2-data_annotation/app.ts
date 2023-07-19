// typescript yazarken tanımlanan her değişkenin tipi belirtilir
// herhangi bir şey olması isteniyorsa boş bırakılmaz, any yazılır

let age: number = 29;
let firstname: string = "Onur";
let lastname: string = "Taşcı";
let isUpdated: boolean = true;

function display(id: any, name: string) {
  console.log(`ID: ${id}, Name: ${name}`);
}
