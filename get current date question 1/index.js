// const student = {
  
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };

// delete student.rollno;

// console.log(student);


// const pi = 3.142;

// 


// function bool(number){
        
//         5/number == 1;
// }

// console.log(Boolean(bool(5)));


// function type(){
//     let first_name = prompt("Enter your name");
//     let age = prompt("Enter your age");


//       return first_name;
// }

// console.log(type(typeof first_name));


// 


// function argument(args){
       
//         let bytd = typeof args

//         return bytd

// }

// console.log(argument("retfd"))


// const d = new Date(2018, 11, 24, 10, 33, 30, 0)

// console.log(d)

// const date = new Date()

// console.log(date)



// const date = new Date()


// let year = date.getFullYear()

// console.log(year)



// const date = new Date()

// let month =String (date.getMonth()+1).padStart(2,"0");

// console.log(month);



// const date = new Date()

// let day = date.getDate();

// console.log(day);


const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let month =String (date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();


let currentDate = month + "-"+ currentDay + "-" + currentYear;

console.log("The current date is " + currentDate);






