// //For loop
// let n =4;
// for(let i = 1;i<=n;i++){
//     console.log(i)
// }


// // While loop 
// let c = 5;
// c=1;
// while(c<=n){
//     console.log(c)
//     c++
// }

//print 1 to 100
// let d;
// for(d=1;d<=100;d++){
//     console.log(d)
// }

//Factorial
// let b=7;
// let ans =1;
// for(let a=1;a<=b;a++){
//     ans=ans*a;
// }
// console.log(ans)


//odd between 1 to 100
// let d;
// for(d=1;d<=100;d++){
//   if(d%2==0)  {  
//   }
//   else{
//  console.log(d)
//   }
// }

//Prime number
// let n = 7;
// let count = 0;
// for(let i=1;i<=n;i++){
//   if(n%i==0){
//     count++;
//   }
// }
// if(count==2){
//   console.log("Prime")
// }else{
//   console.log("Not Prime")
// }



//
// let i = 9;
// let a = 0;
// let b = 1;
// for(let x =1;x<=i;x++){
//   console.log(a)
//   t=a+b;
//   a=b;
//   b=t;
// }



//Print 1-100
// let n=100;
// let i= 1;
// while(i<=100){
//   console.log(i)
//   i++
// }


// let a = 123;
// let count=0;
// while(a>0){
//   count++;
//   n=Math.floor(a/10)
// }
// console.log(count);


// let a = 123;
// let count=0;
// while(a>0){
  
//   count=Math.floor(count+a/10)
//   a=a/10;
  
// }
// console.log(count);


// let a = 123;
// let count=0;
// while(a>0){
//   count=count*10+a%10
//   a=Math.floor(a/10);
  
// }
// console.log(count)


let a = 153;
x=a;
let count = 0;
while(a>0){
  let d = a%10;
  count=count+d*d*d;
  a = Math.floor(a/10)
}
console.log(count);
if(x=count){
  console.log("Armstrong number")

}else{
  console.log("Not Armstrong number")
}




