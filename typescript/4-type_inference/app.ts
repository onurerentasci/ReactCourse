// biz belirtmesek bile typescript verilen ifadenin türünü belirleyebilir
let sayac = 0;

console.log(typeof sayac); // number yazılmasa bile typeof number döner

// 1. ifade
// function increment(counter: number) {
//   return counter++;
// }

// 2. ifade

// function increment(counter: number):number {
//   return counter++;
// }

// typescript için 2 ifade birbirinin aynısıdır aynı sonucu döner

function sum(a: number, b: number) {
  return a + b;
}

// let total: number = sum(10, 15); // hata vermez

// let total: string = sum(10, 15); // !! hata verir
