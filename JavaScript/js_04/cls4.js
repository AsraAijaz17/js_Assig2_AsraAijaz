//Functions
//_______________________________________________________

// function printHello () {
//     console.log("hello");
// }

// printHello();
//_______________________________________________________

// function printingVal(a,b) {
//     return a + b;
// }
// let var1 = printingVal(1,2);
// console.log(var1);
// document.write(var1);
//________________________________________________________

// function printingName (name) {
//     console.log("hello" + " "+ name);
// }

// printingName("Asra");
// printingName("Aliza");
// printingName("Tasneem");
// printingName("Zoha");


//_________________________________________________________

// function printingName (name) {
//     console.log("hello" + " "+ name);
// }

// let inputName= prompt("Enter your name");
// printingName(inputName);

//_______________________________________________________

//alert builtin func
//__________________________________________________________

// function Employee (fileNo) {
//     return "working on file " + " " + fileNo
// }

// let printFileNo= Employee(1);
// console.log(printFileNo);


//_______________________________________________________


//RECURSION = asa func jo apne apko khud call kre
// function writeData (data) {
//     document.write(data); 
//     console.log(data);
//     writeData(1)   // ---->ye infinite time chlega islie koi cond dena zaruri hai     
   
// }

// writeData(1234);


//_____________________________________________________________


// function writeData (data, times) {
//     console.log(data);
//     if (times>0){
//         writeData(data,times -1);

//     }
    
   
// }

// writeData(1234, 0);

//____________________________________________________


// function factorial (num) {
//     if (num > 0 ){
//         return num * factorial(num-1);
//     }
//     return 1

// }
// let ret = factorial(5)
// console.log(ret)

//_________________________________________________________


// function power(base, exponent){
//     if (exponent === 0){
//         return 1
//     } else{ 
//         return base * power(base,exponent -1);

//     } 
    

// }

// console.log(power(2,3))


// function factorial (num){
//     if (num === 0){
//         return 1
       
//     } else {
//         return num * factorial(num-1)
    
//     }

// }

// let var1=factorial(3)
// console.log(var1)

//_____________________________________________________________

//CLOSURES



// function printing(str){
//     let var2 = str
//     return function (str2){
//         console.log(str +" " + str2)

//     }
    

// }

// let final = printing("hello");
// final("how r u");

//____________________________________________________________









