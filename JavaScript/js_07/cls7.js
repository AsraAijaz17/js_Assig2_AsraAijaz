
// <<<<<<< DOM >>>>>>


//getElemetById , defer , InnerText , innerHtml, querySeelector()

//_______________________________________________



// let myPara = document.getElementById("my-para");
// myPara.innerText = "Hello" //agar srf txt rkhwana h to innerText r agar html likhwani h to innerhtml //dom manupulation kehlata h ye

// id ki trha class n div bh use krskte



//________________________________________
//QuerySelector ---> means dhund k ajao element ko(is me elemt p drct ya #idname ayega)



// let myPara1 = document.querySelector("#my-para");
// console.log(myPara1);

// let myPara2 = document.querySelector("p"); //agar mult p element hain to srf pehla leke aygea
// console.log(myPara2)



//______________________________________________
//innerHtml
//yha b k tag ne pehle para rkha r usy bold kradia


// let myPara1 = document.querySelector("#my-para");
// myPara1.innerHTML = "<b>Pakistan Zindabad </b>"
// console.log(myPara1);


//______________________________________________
//Styling krwaskte hain element k upr 

// let myPara = document.querySelector("p")
// myPara.innerText = "Hello moto"
// myPara.style.background = "#000"
// myPara.style.color = "#fff"


// console.log(myPara);

//________________________________________________

// @@@@@@@@@@@@@@Assignnt ques3@@@@@@@@@@@@@@@@@@@@@
// function addNewPara (Val){
//     let addElement =document.createElement("p");
//     addElement.innerHTML= Val;
//     document.body.appendChild(addElement);
// }
//  addNewPara(prompt("Enter whatever you want to add:"));

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//_______________________________________________



// function addNewList(Val){
//     let a = document.createElement("l")
//     a.innerHTML= "<li> Val </li>"
//     document.body.appendChild(a);


// }

// addNewList("tea");



// let mylist= document.getElementById("mylist");
// let newitem = document.createElement("li")
// let txtNode = document.createTextNode("Tea");
// newitem.appendChild(txtNode);
// mylist.appendChild(newitem);


//__________________________________________
//@@@@@@@@@@@@@@ Assigmnt ques 4 @@@@@@@@@@@@@@@@@



// function addingElements (val){
//     let unorderedList = document.getElementById("mylist");
//     let newElement = document.createElement("li");
//     let myText = document.createTextNode(val);
//     newElement.appendChild(myText);
//     unorderedList.appendChild(newElement);

// }

// addingElements(prompt("Enter an item in the list"));
// addingElements(prompt("Enter an item in the list"));
// addingElements(prompt("Enter an item in the list"));
// addingElements(prompt("Enter an item in the list"));




//______________________________________________

// let myPara = document.querySelector("p")
// myPara.innerText = "Hello moto"
// myPara.style.background = "#000"
// myPara.style.color = "#fff"


// console.log(myPara);
//______________________________________________


// let addElement = document.createElement("p")
// let myText = document.createTextNode("hey whats going on?");
// addElement.appendChild(myText)
// document.body.appendChild(addElement)

// addElement.style.background = "#FFB6C1"

//____________________________________________



// let addElement =document.createElement("p");
// addElement.innerHTML= "<b>hello</b>";
// document.body.appendChild(addElement);
// addElement.style.background = "#FFB6C1"

//_______________________________________


// function changeColor (id ,color){
//     let getId = document.getElementById(id);
//     getId.style.background ="#"+color;

// }

// changeColor(para1,FFB6C1)

//_______________________________________
//@@@@@@@@@@@@@@@@@ assignmnt ques 5 @@@@@@@@@@@@@@@

// function changeColor (id ,color){
//     id.style.background = color;

// }


// let getid= document.getElementById("para-1")
// let color = "#FFB6C1"
// changeColor(getid,color)

//_______________________________________________

//@@@@@@@@@@@@@@ assignmnt ques 1 @@@@@@@@@@@@@@@@@
// function addtion (num1){  
//     return function (num2) {
//         console.log( num1 + num2);
//     }   
// }

// let var1 = addtion(5);
// var1(2);
// var1(3);

//________________________________________________


//_______________________________________________
//@@@@@@@@@@@@@@@ assignmt ques 2 @@@@@@@@@@@@@@@

// function searching(arr, num, i=0 ){
//     if (i===arr.length){
//         return false;
//     }else if (arr[i]===num){
//         return true;
//     }else {
//         return searching(arr, num ,i+1);
//     }

// }

// let arr = [1,2,3,4,5]
// let var1 = 9;

// console.log(searching(arr,var1));

//________________________________________________









    






