// 1-topshiriq
// -----------------------------------------------------------------------
// let l = prompt("Uzunlikni sm da kirting");
// console.log(`Siz kirtgan santimer ${l / 100} metrga teng`);

// 2-topshiriq
// ----------------------------------------------------------------------------
// let m = prompt("Og'irlikni km da kirting");
// console.log(`Siz kirtgan og'irlik ${m / 1000} tonnaga teng`);

// 3-topshiriq
// ----------------------------------------------------------------------------
// let b = prompt("hajimni baytda da kirting");
// console.log(`Siz kirtgan bayt ${b / 1024} kilobaytga teng`);

// 4-topshiriq
// ----------------------------------------------------------------------------
// let a = 10;
// let b = 3;
// console.log(10 / 3);

// 5-topshiriq
// ----------------------------------------------------------------------------
// let a = 10;
// let b = 3;
// console.log(10 % 3);
// 6-topshiriq

// ----------------------------------------------------------------------------
// let a = prompt("Ikki xonali son kiriting");
// console.log(Math.floor(a % 10));
// console.log(Math.floor(a / 10));

// 7-topshiriq
// ----------------------------------------------------------------------------
// let a = prompt("Ikki xonali son kiriting");
// let b = Math.floor(a / 10);
// let c = a % 10;
// console.log(`Siz kirtgan sonning raqamlar yig'indisi ${b + c} ga teng`);

// 8-topshiriq
// ----------------------------------------------------------------------------
// let a = prompt("Ikki xonali son kiriting");
// let b = Math.floor(a / 10);
// let c = a % 10;
// console.log(`Siz kirtgan sonning raqamlar o'rnini almashtirishdan hosil bo'gan son ${c}${b} asli kirtgan soningiz ${b}${c}`);

// 9-topshiriq
// ----------------------------------------------------------------------------
// let a = prompt("Uch xonali son kiriting");
// let b =(a % 10);
// console.log(`Siz kirtgan sonning yuzlar xonasidagi raqami ${b} ga teng`);

// 10-topshiriq
// ----------------------------------------------------------------------------
// let a = prompt("Uch xonali son kiriting");
// let b = Math.floor(a / 100);
// let c = Math.floor(a / 10);
// let d = Math.floor(c % 10);
// console.log(
//   `Siz kirtgan sonning oldin birliklar xonasidagi sonni chiqardim keyin o'nliklar xonasidagi son ${b}${d}`
// );

// 11-topshiriq
// ----------------------------------------------------------------------------
// let a = prompt("Uch xonali son kiriting");
// let b = Math.floor(a / 100);
// let c = Math.floor(a % 100);
// let f = Math.floor(c / 10);
// let d = Math.floor(c % 10);
// console.log(
//   `Siz kirtgan sonning raqamlar yig'indisi ${
//     b + f + d
//   } ga teng`
// );

// 12-topshiriq
// ----------------------------------------------------------------------------
// let a = prompt("Uch xonali son kiriting");
// let b = Math.floor(a / 100);
// let c = Math.floor(a % 100);
// let f = Math.floor(c / 10);
// let d = Math.floor(c % 10);
// console.log(`Siz kirtgan sonning raqamlar teskari tartibda yozishdan hosil bo'lgan son ${d}${f}${b} ga teng`);

// 12-topshiriq
// ----------------------------------------------------------------------------
// let a = prompt("Uch xonali son kiriting");
// let b = Math.floor(a / 100);
// let c = Math.floor(a % 100);
// let f = Math.floor(c / 10);
// let d = Math.floor(c % 10);
// console.log(
//   `Siz kirtgan sonning chapdan birinchi raqamini olip o'ng tarafga yozishdan hosil bo'lgan son ${f}${d}${b} ga teng`
// );
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// QO'SHIMCHA

//1-Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// ----------------------------------------------------------------------------
// let a = 2;
// let b = 3;
// let c = 4;
// if (a > 0 && b > 0 && c > 0) {
//   alert(`To'g'ri`);
//   console.log(true);
// } else {
//   alert(`Xato`);
//   console.log(false);
// }

//2-Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// ----------------------------------------------------------------------------
// let a = -2;
// let b = -3;
// let c = -4;
// if (a > 0 || b > 0 || c > 0) {
//   alert(`To'g'ri`);
//   console.log(true);
// } else {
//   alert(`Xato`);
//   console.log(false);
// }

//3-Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
// ----------------------------------------------------------------------------
// let a = prompt(`son kiriting`);
// let b = prompt(`yana son kiriting`);
// let c = prompt(`oxirgi soni kiriting`);
// if (a > 0 || b > 0 || b > 0 || c > 0) {
//   alert(`To'g'ri`);
//   console.log(true);
// } else {
//   alert(`Xato`);
//   console.log(false);
// }

//4-Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// ----------------------------------------------------------------------------
// let a = prompt(`son kiriting`);
// let b = prompt(`yana son kiriting`);
// let c = prompt(`oxirgi soni kiriting`);
// if (a > 0 & b > 0 & c > 0) {
//     alert(`To'g'ri`)
//     console.log(true)
// }else{
//     alert(`Xato`)
//     console.log(false);
// }

// //5-Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
// ----------------------------------------------------------------------------
// let a = prompt(`son kirting`)
// let b = prompt(`yana son kiriting`)
// if ( a > 9 && a <= 99 && a % 2 === 0 ) {
//     alert(`To'g'ri`)
//     console.log(true)
// }else{
//     alert(`Xato`)
//     console.log(false)
// }
