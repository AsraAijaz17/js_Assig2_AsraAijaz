//Array
// push,pop,shift,unshift, length,splice,slice
// arr.Foreach , arr.filter , arr.sort() , reduce , arr.map()






// let arr = ["Jan", "feb", "mar","april"]
// console.log(arr[0],arr[1])

// arr[4]= "may"     //Not recmmended
// console.log(arr)

//____________________________________
// let arr = ["Jan", "feb", "mar","april"]

// let ShouldIStore = prompt("Array me value rakhun?");
// if (ShouldIStore === "yes"){
//     arr.push(prompt("Enter value"));
    
// } 

// console.log(arr)

//____________________________________



//arr.shift { Shift shru me se value ko nikaldega }
// arr.unshift { shru m value add kardega jo () me denge  or agar srf unshift chalayenge to values wps ajaengi}

// let arr = ["Jan", "feb", "mar","april"]
// // arr.shift()
// arr.unshift()


// console.log(arr)


//____________________________________
// let arr = ["Jan", "feb", "mar","april"]
// console.log(arr.length)

//_____________________________________



//agar koi value remove krni h or m btaun k knsi remove krni h (splice)
// splice(2,1)----> second index se remv krna strt or 1 means bs aik value


// let arr = ["Jan", "feb", "mar","april"]
// let afterRemove = arr.splice(2,2,"May","june","july")
// console.log(afterRemove) 
// console.log(arr) 



//_____________________________

//slice aik naya arry banake deta h [slice (0,2)]----> 0 index se 2 index tk ki values ka ak naya array banjaega

// let arr = ["Jan", "feb", "mar","april"]


// let newArr = arr.slice(0,2)
// console.log(newArr)

//__________________________________

//FOREACH----> array ki jtni length hogi utni br chlega or ak ak value isme ati jaegi isme aik anonymous func hota h usme ati jaengi ak ak krke arr ki values,--> isy 3 parameter milte hain value index or array!


// let arr = ["Jan", "feb", "mar","april"]

// arr.forEach(function(val,index){
//     console.log(val,index)

// })


//_____________________________

//arr.filter-----> ye filter arrays m se kisi logic ki behalf p certain val remv krdta h isme bh ak func pass krty hn, naya array lky dega 


// let arr = [1,2,3,4,5,6,7,8]

// let newArr = arr.filter(function(val){
//     if (val % 2 === 0){
//         return true
//     }else {
//         return false
//     }
// })

// console.log(newArr)


//_______________________________


//arr.sort()---> isme bh fun dte hain or 2 paramter dne hte hain or nchy cond dni hti h > and < ki , ye bh naya arr lke dta h  , > me ascen < desc


// let arr = [4,6,3,2,7,4,3,]
// let newArr = arr.sort(function(a,b){
//     if (a>b){
//         return 1
//     } else {
//         return -1
//     }

// })


// console.log(newArr)

//_________________________________


//arr.reduce ---> isme bh ak func pass kia jata h + ak default value bh pass krwai jati h, ye array k num ko add krta hai , or array k andr ki strngs ko concatenate krwata h,,, or iske param m 2 val pass ki jti hain prev and current ,, jtni arr ki len hgi utni br chlegA

// let arr = [1,2,3,4]
// let newArr = arr.reduce(function(prev,curr){
//     return prev + curr;

// }, 2);
// console.log(newArr)

//_______________________________











