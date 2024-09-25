// window.alert("Hello From JS File");
// --> هيطلع الرساله ديه لما ادخل علي الصفحه بش مشكلته انه بيوقف المحتوي اللي بعده
document.write("<h1>Hello <span>Page</span></h1>"); // ممكن اكتب فيها اكواد و ممكن اكتب فيها حاجه و يطبعها عادي
document.write(5 + 5); // 10
console.log("Hello From JS File"); // لو عاوز اطبع رساله في الكونسل
console.error("Error"); // هيعملي رساله ايرور
console.table(["Osama", "Ahmed", "Syed"]); // هيطبع الاسماء بالرقم بتاعهم
console.log("Hello From %cJS %cFile", "color: red; font-size:40px", "color: blue; font-size:40px");
// typeof ==> بيتعرف علي نوع البيانات
console.log(typeof ("Osama Mohamed")); // string
console.log(typeof "Osama Mohamed"); // string
console.log(typeof 5000); // number
console.log(typeof 5000.99); // number
console.log(typeof [10, 15, 17]); // Array ==> object
console.log(typeof ["Os", "Ah", "Sa"]); // Array ==> object
console.log(typeof { name: 'Osama', age: 17, country: 'Egypt' }); // object ==> object
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined 
console.log(typeof null); // object 
// ------------------------- //
var user = "Sayed"; // لو عاوز انشاء فاريبول
var age = 37;
console.log(user);
console.log(age);
console.log(hello); // ID --> بيتعامل معاه علي انه فاريبول عادي
hello.innerHTML = "Option"; // هيعدل محتوي الفاريبول
// ------------------------- //
/*
 var
  - Redeclare (Yes)
    var x = 1;
    var x = 2; // Not Error
  - Access Before Declare (Undefined)
    console.log(x); // Undefined
    var x = 1;
  - Variable Scope Drama [Added To Window] ()
  - Block or Function Scope

 Let
  - Redeclare (No => Error)
    let x = 1;
    let x = 2; // Error
  - Access Before Declare (Error)
    console.log(x); // Error
    let x = 1;
  - Variable Scope Drama [Not Added To Window] ()
  - Block or Function Scope

  Const
  - Redeclare (No => Error)
    const x = 1;
    const x = 2; // Error
  - Access Before Declare (Error)
    console.log(x); // Error
    const x = 1;
  - Variable Scope Drama [Not Added To Window] ()
  - Block or Function Scope
*/
// ------------------------- //
document.write("<br>");
document.write("<br>");
let a5484165 = "We Love";
let b5484165 = "JavaScript";
document.write(a5484165 + " " + b5484165); // We Love JavaScript --> in page 
console.log(a5484165 + " " + b5484165); // We Love JavaScript --> in console
console.log(a5484165, b5484165); // We Love JavaScript --> in console
let c5484165 = "And";
let d5484165 = "Programming";
console.log(a5484165 + " \"\" \'\' \\\\ " + b5484165 + "\n" + c5484165 + " " + d5484165 + " " + 100 * 50)
console.log(`${a5484165} "" '' \\\\ ${b5484165} 
${c5484165} ${d5484165} ${100 * 50}`)
console.log(10 + "Osama"); // 10Osama // string
console.log(10 - "Osama"); // NaN
console.log(typeof NaN) // number
console.log(2 ** 4); // 2 * 2 * 2 * 2 = 16
console.log(10 % 2); // 0
console.log(11 % 2); // 1

console.log(100); // 100 ==> number 
console.log("100"); // 100 ==> string 
console.log(null); // null ==> object
console.log(true); // true ==> boolean 

console.log(+100); // 100 ==> number
console.log(+"100"); // 100 ==> number
console.log(+"-100"); // -100 ==> number
console.log(+"Osama"); // NaN 
console.log(+"5.5"); // 5.5 ==> number
console.log(+0xff); // 255 ==> number
console.log(+null); // 0 ==> number
console.log(+true); // 1 ==> number 
console.log(+false); // 0 ==> number 
console.log("\n");
console.log(-100); // -100 ==> number
console.log(-"100"); // -100 ==> number
console.log(-"-100"); // 100 ==> number
console.log(-"Osama"); // NaN 
console.log(-"5.5"); // -5.5 ==> number
console.log(-0xff); // -255 ==> number
console.log(-null); // -0 ==> number
console.log(-true); // -1 ==> number 
console.log(-false); // -0 ==> number
console.log("\n");
console.log(Number("100")); // 100 ==> number
console.log("\n");
var f = "10";
var g = 20;
console.log(f - g); // -10 ==> علشان هما الاتنين رقمين
console.log(g - f); // 10 ==> علشان هما الاتنين رقمين
var f = "Osama";
console.log(f - g); // NaN
console.log("" - 2); // 0 - 2 = -2
console.log(false - true); // 0 - 1 = -1

var f = 10;
f = f + 20;
console.log(f); // 30

var f = 10;
f += 20;
console.log(f); // 30

f -= 50;
console.log(f); // -20

f /= 2;
console.log(f); // -10

console.log(1000000); // 1000000
console.log(1_000_000); // 1000000
console.log(1e6); // 1000000
console.log(10 ** 6); // 1000000
console.log(1000000.0); // 1000000
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 ==> اكبر رقم امن ممكن استخدمه يعني الارقام اللي بعده ممكن تطلع قيم غلط
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 ==> اكبر رقم ممكن استخدمه
console.log(Number.MAX_VALUE + 1); // 1.7976931348623157e+308 ==> هيطلع نفس الرقم

console.log((100).toString()); // 100 ==> string
console.log(100..toString()); // 100 ==> string
console.log(100.555555.toFixed(1)); // 100.6 ==> عدد الارقام اللي بعد العلامه اللي هرجعها بيرجع استرنج
console.log(Number("100 Osama")); // NaN
console.log(+"100 Osama"); // NaN
console.log(parseInt("100 Osama")); // 100 ==> integer
console.log(parseInt("100.500 Osama")); // 100 ==> integer
console.log(parseFloat("100.596 Osama")); // 100.596 ==> Float
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.500)); // false
console.log(Number.isInteger(100)); // true
console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100
console.log(Math.ceil(99.5)); // 100
console.log(Math.ceil(99.9)); // 100
console.log(Math.min(10, 20, 100, -100, 90)); // -100
console.log(Math.max(10, 20, 100, -100, 90)); // 100
console.log(Math.pow(2, 5)); // 32
console.log(Math.random()); // بيطلع رقم عشوائي
console.log(Math.trunc(99.5)); // 99 ==> بيشيل الكسور

var theName = "Ahmed";
console.log(theName); // Ahmed
console.log(theName[1]); // h
console.log(theName[5]); // undefined
console.log(theName.charAt(1)); // h
console.log(theName.charAt(5)); // مش هترجع حاجه
console.log(theName.length); // 5

var theName = "   Ahmed   ";
console.log(theName); //    Ahmed   
console.log(theName.length); // 11
console.log(theName.trim()); // Ahmed ==> بتشيل الماسافات
console.log(theName.toUpperCase()); //    AHMED   
console.log(theName.toLowerCase()); //    ahmed   
console.log(theName.trim().charAt(2).toUpperCase()); // M

var f = "Elzero Web School";
console.log(f.indexOf("o")); // 5 ==> بيبحث عن كلمه 
console.log(f.indexOf("o", 8)); // 14 ==> هيبدا البحث من انديكس 8
console.log(f.lastIndexOf("o")); // 15 ==> هيبحث من الاخر 
console.log(f.slice(0)); // Elzero Web School ==> بيقطع النص
console.log(f.slice(2)); // zero Web School
console.log(f.slice(2, 6)); // zero
console.log(f.slice(-5)); // chool ==> بيعد من الاخر العد بيبدا من (1-)
console.log(f.slice(-5, -3)); // ch
console.log(f.repeat(5)); // هيطبع الجمله خمس مرات ورا بعض
console.log(f.split()); // ['Elzero Web School'] ==> بيرجع العنصر علي شكل مصفوفه
console.log(f.split("")); // ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(f.split(" ")); // ['Elzero', 'Web', 'School']
console.log(f.split("", 5)); // ['E', 'l', 'z', 'e', 'r']
console.log(f.split(" ", 2)); // ['Elzero', 'Web']
console.log(f.substring(2)); // zero Web School ==> بيقطع الكلمه
console.log(f.substring(2, 6)); // zero
console.log(f.substring(6, 2)); // zero
console.log(f.substring(-10)); // Elzero Web School ==> اي رقم اصغر من الصفر هيخليه يبدا من الصفر
console.log(f.substring(-10, 6)); // Elzero
console.log(f.substring(f.length - 1)); // l
console.log(f.substring(f.length - 5)); // chool
console.log(f.substring(f.length - 5, f.length - 3)); // ch
console.log(f.substr(0)); // Elzero Web School
console.log(f.substr(17)); //  
console.log(f.substr(0, 1)); // E ==> 0 -> Start | 1 -> count
console.log(f.substr(-3)); // ool
console.log(f.substr(-5, 2)); // ch
console.log(f.startsWith("E")); // true ==> هل الاستريج بيبدا ب الكلمه اللي هبعتهالو
console.log(f.startsWith("E", 2)); // false ==> 2 -> index
console.log(f.startsWith("zero", 2)); // true
console.log(f.endsWith("o")); // false ==> هل الكلمه بتنتهي اللي انا باعته
console.log(f.endsWith("o", 6)); // true ==> 6 -> length 

console.log(10 == "10"); // true
console.log(-100 == "-100"); // true
console.log(10 != "10"); // false
console.log(-100 != "-100"); // false
console.log(10 === "10"); // false
console.log(-100 === "-100"); // false
console.log(10 !== "10"); // true
console.log(-100 !== "-100"); // true
console.log(10 !== 10); // false
console.log(10 > 20); // false
console.log(10 > 10); // false
console.log(10 >= 10); // true
console.log(10 < 20); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true
console.log(typeof "Osama" === typeof "Ahmed"); // true
console.log(true); // true
console.log(!true); // false
console.log(10 == "10"); // true
console.log(10 == "10" && 10 > 8 && 10 > 50); // false
console.log(10 == "10" || 10 > 8 || 10 > 50); // true

var price = 100;
var discount = true;
var discountAmount = 30;
var country = "KSA";

if (discount === true) {
  price -= discountAmount;
}
else if (country == "Egypt") {
  price -= 40;
}
else if (country == "Syria") {
  price -= 50;
}
else {
  price -= 10;
}
console.log(price); // 70

var theName = "Ahmed";
var theGender = "Male";
var theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
} // Mr

theGender === "Male" ? console.log("Mr") : console.log("Mrs"); // Mr
var result = theGender === "Male" ? "Mr" : "Mrs";
console.log(theGender === "Male" ? "Mr" : "Mrs"); // Mr
console.log(result); // Mr
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`); // Hello Mr Ahmed
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
    ? console.log("20 To 60")
    : theAge > 60
      ? console.log("Larger Than 60")
      : console.log("Unknow"); // 20 To 60 --> لو اكتر من شرط

// -------- Logical Or || -------- //
// -------- Null + Undefined + Any False Value -------- //
var price;
console.log(`The Price Is ${price ?? 200}`); // The Price Is 200

var price = 100;
console.log(`The Price Is ${price || 200}`); // The Price Is 100


var price = 0;
console.log(`The Price Is ${price || 200}`); // The Price Is 200

var price = null;
console.log(`The Price Is ${price || 200}`); // The Price Is 200

var price = false;
console.log(`The Price Is ${price || 200}`); // The Price Is 200

var price = '';
console.log(`The Price Is ${price || 200}`); // The Price Is 200

// -------- Nullish Coalescing Operator ?? -------- //
// -------- Null + Undefined -------- //
var price;
console.log(`The Price Is ${price ?? 200}`); // The Price Is 200

var price = 0;
console.log(`The Price Is ${price ?? 200}`); // The Price Is 0

var price = null;
console.log(`The Price Is ${price ?? 200}`); // The Price Is 200

var price = false;
console.log(`The Price Is ${price ?? 200}`); // The Price Is false

var price = '';
console.log(`The Price Is ${price ?? 200}`); // The Price Is 

// -------- Switch Statement -------- //
var day = 2;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unkown Day");
} // Monday

// -------- Array -------- //
var myFrinds = ["Ahmed", "Mohamed", "Sayed"];
console.log(`Hello ${myFrinds[0]}`); // Hello Ahmed
console.log(`Hello ${myFrinds[1]}`); // Hello Mohamed
console.log(`Hello ${myFrinds[2]}`); // Hello Sayed
console.log(myFrinds[1][2]); // h

var myFrinds = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
console.log(`Hello ${myFrinds[3][1]}`); // Hello Ali
console.log(myFrinds[3][1][2]); // i
console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed', Array(2)]
myFrinds[1] = "Gamal";
console.log(myFrinds) // ['Ahmed', 'Gamal', 'Sayed', Array(2)]
myFrinds[3] = "sameh";
console.log(myFrinds) // ['Ahmed', 'Gamal', 'Sayed', 'sameh']
myFrinds[3] = ["sameh", "Ameer"];
console.log(myFrinds) // ['Ahmed', 'Gamal', 'Sayed', Array(2)]

console.log(Array.isArray(myFrinds)); // true
var str = "Osama";
console.log(Array.isArray(str)); // false

// -------- Array Methods -------- //
// -------- Length -------- //

var myFrinds = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFrinds.length); // 4

myFrinds[3] = "Gamal";
console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal']

myFrinds[6] = "Gamal";
console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Gamal']
console.log(myFrinds.length); // 7

myFrinds[myFrinds.length] = "Gamal"; // بيضيف العنصر في الاخر من غير ما احسب الاندكس
console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Gamal', 'Gamal']

myFrinds[myFrinds.length - 1] = "Abdo"; // بيحدث قيمه اخر عنصر
console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal', empty × 2, 'Gamal', 'Abdo']

myFrinds.length = 3; // بيحدد عدد العناصر اللي انا عاوزه
console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed']

/*
  Array Methods [Adding And Removing]
  - unshift() Add Element To The Frist
  - push() Add Element To The End
  - shift() Remove Frist Element From Array
  - pop() Remove Last Element From Array
*/

var myFrinds = ["Ahmed", "Mohamed", "Sayed", "Alaa"]

console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed', 'Alaa']
myFrinds.unshift("Osama", "Nabil");
console.log(myFrinds); // ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa']

myFrinds.push("Samah", "Eman");
console.log(myFrinds); // ['Osama', 'Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Samah', 'Eman']

var first = myFrinds.shift();
console.log(myFrinds); // ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Samah', 'Eman']
console.log(`First Name Is ${first}`); // First Name Is Osama

var last = myFrinds.pop();
console.log(myFrinds); // ['Nabil', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Samah']
console.log(`Last Name Is ${last}`); // Last Name Is Osama

// -------- Array Search -------- //

var myFrinds = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"]

console.log(myFrinds); // ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Ahamed']
console.log(myFrinds.indexOf("Ahmed")); // 0
console.log(myFrinds.indexOf("Ahmed", 2)); // 4
console.log(myFrinds.lastIndexOf("Ahmed")); // 4
console.log(myFrinds.lastIndexOf("Ahmed", -2)); // 0
console.log(myFrinds.includes("Ahmed")); // true
console.log(myFrinds.includes("Ahmed", 2)); // true
console.log(myFrinds.includes("Osama")); // false

// -------- Array Sort -------- //

var myFrinds = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(myFrinds); // [10, 'Sayed', 'Mohamed', '90', 9000, 100, 20, '10', -20, -10]
// sort() --> بترتب العناصر ابجديا
console.log(myFrinds.sort()); // [-10, -20, 10, '10', 100, 20, '90', 9000, 'Mohamed', 'Sayed']
// reverse() --> بيعكس اماكن العناصر
console.log(myFrinds.reverse()); // ['Sayed', 'Mohamed', 9000, '90', 20, 100, '10', 10, -20, -10]
// sort().reverse() --> هيرتبهم و يعكسهم
console.log(myFrinds.sort().reverse()); // ['Sayed', 'Mohamed', 9000, '90', 20, 100, 10, '10', -20, -10]

// -------- Array Slicing -------- //
// slice --> مش بتغير في الاري
var myFrinds = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFrinds.slice()); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFrinds.slice(1)); // --Start-- ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFrinds.slice(1, 3)); // --Start && End-- ['Sayed', 'Ali']
console.log(myFrinds.slice(-3)); // ['Osama', 'Gamal', 'Ameer']
console.log(myFrinds.slice(1, -2)); // ['Sayed', 'Ali', 'Osama']
console.log(myFrinds); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

// splice --> بتغير في الاري
var myFrinds = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFrinds.splice(0, 0, "Sameer", "Samara")); // Start, Delete Count, Add Element In The Start Index
console.log(myFrinds); // ['Sameer', 'Samara', 'Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFrinds.splice(0, 1, "Sameer", "Samara")); // Start, Delete Count, Add Element In The Start Index
console.log(myFrinds); // ['Sameer', 'Samara', 'Samara', 'Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFrinds.splice(0, 2, "Abdo", "sama")); // Start, Delete Count, Add Element In The Start Index
console.log(myFrinds); // ['Sameer', 'Samara', 'Samara', 'Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

// -------- Array Concat && Array Joining -------- //
var myFrinds = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
var myNewFriends = ["Samar", "Sameh"]
var schoolFriends = ["Haytham", "Shady"];
var allFriends = myFrinds.concat(myNewFriends, schoolFriends, "Gamel", [1, 2]); // بيدمجهم في اري واحده
console.log(allFriends); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady', 'Gamel', 1, 2]
console.log(allFriends.join()); // بيحول الاري لاسترنج و بيفصل بينهم بالي انا عاوزه
console.log(allFriends.join("|")); // Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gamel|1|2
console.log(allFriends.join("|").toUpperCase()); // AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMEL|1|2

// -------- For Loop -------- //
var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
var colors = ["Red", "Green", "Black"]

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}
/*
  Keyboard
  - Red
  - Green
*/

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break nestedLoop;
    }
  }
}
/*
  Keyboard
  - Red
  - Green
  Mouse
  - Red
  - Green
  Pen
  - Red
  - Green
  Pad
  - Red
  - Green
  Monitor
  - Red
  - Green
*/

var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
var colors = ["Red", "Green", "Black"]
var showCount = 5;

document.write(`<h1>Show ${showCount} Products </h1>`);
for (let i = 0; i < showCount; i++) {
  document.write(`<h3>Product ${i + 1} ${products[i]}</h3>`);
  for (let j = 0; j < 2; j++) {
    document.write(`<h5>Color ${j + 1} ${colors[j]}</h5>`);
  }
}

var products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
var index = 0;
while (index < products.length) {
  console.log(products[index]);
  index++;

}
/*
  Keyboard
  Mouse
  Pen
  Pad
  Monitor
  iphone
*/

var i = 0;
do {
  console.log(i);
  i++;
} while (false); // 0

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  }
  else {
    console.log(`Hi ${userName} Your Age is ${age}`);
  }
}
sayHello("Osama", 38); // Hi Osama Your Age is 38
sayHello("Sayed", 40); // Hi Sayed Your Age is 40
sayHello("Ali", 18); // App is Not Suitable For You

function calc(num1, num2) {
  return num1 + num2;
}
console.log(calc(10, 20) + 100); // 130

function sayHello(username = "Unknown", age = "Unknown") {
  if (age === undefined) {
    age = "Unknown";
  }
  age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}
console.log(sayHello()); // Hello Unknown Your Age Is Unknown

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  var result = 0;
  // console.log(Array.isArray(numbers)); // true
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final Result Is ${result}`;
}
console.log(calc(10, 20, 20, 30, 40, 50)); // Final Result Is 170

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

var calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20)); // 30

/*
  Function
  - Function Inside
  - Return Function
*/

// Exemple 1
function sayMessage(fName, lName) {
  var message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}
console.log(sayMessage("Osama", "Mohamed")); // Hello Osama Mohamed

/*
  Function
  - Arrow Function
  - Regular vs Arrow [Param + No Param]
  - Multiple Line
*/

var print = function () {
  return 10;
}
console.log(print()); // 10

var print = () => {
  return 20;
}
console.log(print()); // 20

var print = () => 30; // One Line
console.log(print()); // 30

var print = _ => 40; // One Line + No Param
console.log(print()); // 40

var print = num => num; // One Line + Param
console.log(print(50)); // 50

var print = (num1, num2) => num1 + num2; // One Line + Not One Param
console.log(print(50, 60)); // 110

/*
  Scope
  - Global And Local Scope
*/

/*
  var a = 1;
  let b = 2;
  function showText() {
    console.log(`Function - From Local ${a}`)
    console.log(`Function - From Local ${b}`)
  }
  console.log(`From Global ${a}`) // From Global 1
  console.log(`From Global ${b}`) // From Global 2
  showText(); // Function - From Local 1 | Function - From Local 2
*/

/*
  var a454612 = 1;
  let b454612 = 2;
  function showText() {
    var a454612 = 10;
    let b454612 = 20;
    console.log(`Function - From Local ${a454612}`)
    console.log(`Function - From Local ${b454612}`)
  }
  console.log(`From Global ${a454612}`) // From Global 1
  console.log(`From Global ${b454612}`) // From Global 2
  showText(); // Function - From Local 10 | Function - From Local 20
*/

/*
  Scope
  - Block Scope [If, Switch, For]
*/

/*
  var x = 10;
  if (true) {
    var x = 50;
  }
  console.log(x); // 50
*/

/*
  let x = 10;
  if (true) {
    console.log(`From If Block ${x}`); // From If Block 10
  }
  console.log(`From Global ${x}`); // From Global 10
*/

/*
  let x = 10;
  if (true) {
    let x = 50;
    console.log(`From If Block ${x}`); // From If Block 50
  }
  console.log(`From Global ${x}`); // From Global 10
*/

/*
  Scope
  - Lexical Scope
*/

/*
  function parent(){
    let a = 10;
    function child(){
      console.log(a);
    }
    child();
  }
  parent(); // 10
*/

/*
  function parent(){
    let a = 10;
    function child(){
      let a = 20;
      console.log(a);
    }
    child();
  }
  parent(); // 20
*/

/*
  let a = 10;
  function parent(){
    function child(){
      console.log(a);
    }
    child();
  }
  parent(); // 10
*/

/*
  Higher Order Function
  ---> is a function that accept function as parameters and/or return a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being procssing in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Annonymous Function
  - Named Function
*/

var myNums = [1, 2, 3, 4, 5, 6]
var newArray = [];
for (var i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray); // [ 2, 4, 6, 8, 10, 12 ]
// -------------------------------------------------- //
// Same Idea With Map
var addSelf = myNums.map(function (element, index, arr) {
  return element + element;
});
console.log(addSelf); // [ 2, 4, 6, 8, 10, 12 ]
// -------------------------------------------------- //
var addSelf = myNums.map(element => element + element);
console.log(addSelf); // [ 2, 4, 6, 8, 10, 12 ]
// -------------------------------------------------- //
function addition(element) {
  return element + element;
}

var add = myNums.map(addition);
console.log(add); // [ 2, 4, 6, 8, 10, 12 ]
// -------------------------------------------------- //

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - ignoreNumbers Value
*/

var swapinfCases = "elZERo";
var invertedNumbers = [1, -10, -20, 15, 100, -30]
var ignoreNumbers = "Elz123er4o";

var sw = swapinfCases.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join("");
console.log(sw); // ELzerO

var inv = invertedNumbers.map(ele => -ele);
console.log(inv) // [ -1, 10, 20, -15, -100, 30 ]

var ign = ignoreNumbers.split("").map(ele => isNaN(ele) ? ele : "").join("");
console.log(ign); // Elzero

/*
  - Filter
  --- method creates a new array
  --- with all element that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Array => The Current Array
*/

// Test Map vs Filter =======================================
// var addMap = numbers.map(e1 => e1 + e1); //             ||
// console.log(addMap); // [ 22, 40, 4, 10, 34, 20 ]       ||
//                                                         ||
// var addFilter = numbers.filter(e1 => e1 + e1);          ||
// console.log(addFilter); // [ 11, 20, 2, 5, 17, 10 ]     ||
// ==========================================================


// Get Friends With Name Starts With A
var friends = ["Ahmed", "Semeh", "Sayed", "Asmaa", "Amgad", "Israa"];

var filterFriends = friends.filter(el => el.startsWith("A"));
console.log(filterFriends); // [ "Ahmed", "Asmaa", "Amgad" ]

// Get Even Numbers Only
var numbers = [11, 20, 2, 5, 17, 10];

var filterNumbers = numbers.filter(el => el % 2 == 0);
console.log(filterNumbers); // [ 20, 2, 10 ]

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
var sentence = "I Love Foood Code Too Playing Much";
var smallWords = sentence.split(" ").filter(function (ele) { return ele.length < 5 }).join(" ");
console.log(smallWords); // I Love Code Too Much

// Filter String + Multiply
var mix = "A13BS2ZX";
console.log(mix.split("").filter(ele => !isNaN(ele)).map(ele => ele * ele).join("")); // 194

/*
  - Reduce
  --- method executes a reducer function on each element of array,
  --- resulting in a single output value.

  Syntax
  - reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) {}, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array
  ----------- Start from index 0 if an initialValue is provided.
  ----------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

var nums = [10, 20, 15, 30];
var add = nums.reduce(function (acc, current, index, arr) {
  return acc + current;
});
console.log(add); // 75

var nums = [10, 20, 15, 30];
var add = nums.reduce(function (acc, current, index, arr) {
  return acc + current;
}, 5);
console.log(add); // 80

/*
  Reduce
  - Longest
  - Remove Character + Use Reduce
*/

var theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"]
console.log(theBiggest.reduce((acc, current) => acc.length < current.length ? current : acc)); // Propaganda

var removeChars = ["E", "@", "@", "L", "Z", , "@", "@", "E", "R", "@", "O"];
console.log(removeChars.filter(ele => ele != "@").reduce((acc, current) => acc + current)); // ELZERO

/*
  - forEach
  --- method exacuted a provided function once for each array element.

  Syntax forEach(callBlackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/
