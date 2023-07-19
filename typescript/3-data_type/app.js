// 1-Array
// 1. yöntem
// let nameList: string[] = ["Onur", "Eren", "Kerem"];
// console.log(nameList);
// 2. yöntem
// let nameList: Array<string> = ["Onur", "Eren", "Merve"];
// console.log(nameList);
// eğer tip belirtilmezse array içine istenilen türde eleman eklenebilir
// let arr = [1, 3, 5, "Apple", "Orange", true, 2.5];
// array içerisine birden fazla türde eleman tanımlanması mümkündür
// let values: (string | number)[] = ["Banana", 2, 6, "Grapes", 3, 4];
// let values2: Array<string | boolean> = ["Banana", true, false, "Grapes", false];
// array içindeli elemanlara erişim
// console.log(values[3]);
// 2-Tuple
// let ID: number = 12;
// let instructorName: string = "Onur";
// let instructor: [number, string] = [4, "Eren"];
// örnekteki gibi [number, string] şeklinde tip tanımlaması yapılırsa liste 2 elemandan oluşur ve belirtilen sırada yerleştirilir
// var user: [number, string, boolean, number, string];
// user = [11, "Steve", true, 99, "Admin"];
// console.log(instructor, user);
/////////////////////
// let employee: [number, string][];
// burdaki ifade employee listesinin number, string ile oluşan listelerden oluştuğu anlamına gelir
// employee = [
//   [1, "Steve"],
//   [2, "Bill"],
//   [3, "Onur"],
//   [4, "Eren"],
// ];
// 3- Object
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
// let instructor: Person; // Person bir object
// instructor = {
//   firstName: "Onur",
//   lastName: "Taşcı",
//   age: 22,
//   jobTitle: "Software Engineer",
// };
// console.log(instructor);
// obje içindekilere erişme
// console.log(instructor.firstName);
// console.log(instructor.age);
// 4 - Enum
// enum Media {
//   Newspaper, // enum yapısında ilk değer default olarak 0 olarak tutulur
//   Newsletter, // 1
//   Magazine, // 2
//   Book, // 3
// }
// Eğer newspaper ifadesinden sonra = 1 yazarsak başlangıç değeri 0 yerine 1 olur ve devam eder
// console.log(Media.Magazine); // 2 çıktısını verecektir
// enum PrintMedia {
//   Newspaper = "NEWSPAPER",
//   Newsletter = "NEWSLETTER",
//   Magazine = "MAGAZINE",
//   Book = "BOOK",
// }
// console.log(PrintMedia.Magazine); // burada enum bir string ifadeye tanımlandığı için çıktı olarak index değil tanımlı olan ifadeyi verir
// console.log(PrintMedia["Newsletter"]);
// 5 - Union
// union bir şey olabilir demek istendiğinde kullanılır
// let code: string | number | boolean;
// code = 1234;
// code = true;
// code = "Onur";
// 6 - Any
// type bilinmiyor veya bir karmaşıklık var ise kullanılır
// let something: any;
// something = "Onur";
// something = 99;
// something = 2.3;
// something = true;
// something = {
//   firstname: "Onur",
//   lastname: "Taşcı",
//   age: 22,
// };
// let arr: any[] = ["John", 212, true];
// console.log(arr);
// 7 - Void
// fonksiyon geriye değer döndürmüyorsa kullanılır
// function sayHello(): void {
//   console.log("Hello");
// }
// void değer verilirse return kullanılamaz
// sayHello();
// 8 - Never
// geriye hiçbir null dahil value döndürmez ise kullanılır
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// throwError("Hata");
// never ile void arasındaki fark nedir?
// void aslında bir undefined ifadesi döndürür return döndürmez
// let something: void = undefined; // Hata vermez
// let nothing: never = undefined; // !! Hata verir
