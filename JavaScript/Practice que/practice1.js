// Turnary operator
// let age=1;
// let ans=age>=15?"fnal":"not" ;
// console.log(ans);



// let val = prompt("Enter a value");
// if(val%5==0){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// let userName=prompt("Enter your username");
// let length=userName.length;
// let ans=`@${userName}${length} `
// console.log(ans);




// let ar=[2,3,4,5];
// ar.forEach(function(ar) {
//     console.log(ar*ar);
// });





//practice1(Creating username) 

// let fullName= prompt("Enter your fullnname")
// let userName="@"+ fullName+fullName.length
// console.log(userName)



//Practice 2

// let arr=[2,3,45,12,3,24,9]
// let sum=0;
// for(let val of arr){  
//     sum=sum+val;
// }
// console.log(sum)


//Practice 3 (discount)
// let arr=[300,200,400]
// for(let i=0;i<arr.length;i++){
//     let offer=arr[i]/10;
//     arr[i]-=offer;
// }
// console.log(arr)


//Practice 4
// let arr=["Blommberg","Microsoft","Uber","Google","IBM","Netflix"]
// let fArr= arr.shift()
// arr.push("Amazon")
// arr.splice(2, 1,"ola")
// console.log(arr)


//Practice 5
// function countVowels(str){
//     let count =0;
//     for (const char of str ){
//         if(char==="a",char==="e",char==="i",char==="o",char==="u"){
//             count ++;
//         }
//     }
//     return count;
// }


//Practice 6 (square of numbers using forEach loop)
// let arr =[2,3,4,5,6]
// arr.forEach((num)=>{
//     console.log(num*num)
// })


//Practice 7(90+)
// let arr=[39,98,89,90,92,95]
// let result = arr.filter((val)=>{
//     return val>90
// })
// console.log(result)


//Practice 8(array 1  to n)
//let n =prompt("Enter a value of n")
// let arr=[];
// for(i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)
// let sum= arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log("Sum of an array is "+sum);

// let product = arr.reduce((prev, curr)=>{
//     return prev*curr;
// })
// console.log("Product of an array is "+product)


//Practice 9
// let btn =document.createElement("button");
// btn.innerHTML="Click me!";
// btn.style.color="White";
// btn.style.backgroundColor="red";
// document.querySelector("body").prepend(btn);






//Practice 10
// let modeBtn = document.querySelector(".mode");

// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });





// let app=document.querySelector(".hello");
// console.dir(app.innerText);
// app.innerText=app.innerText+"from Apna clg Student!";



