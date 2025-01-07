// function abc(){
//  console.log("I am Vs Code")
// }
// abc();



// function fact(n){
//     let ans = 1;
//     for(let i =1;i<=n;i++){
//         ans = ans*i;
//     }
//     return ans;
// }
// let ans = fact(5)
// console.log(ans)




// function fibo(n){
//    let ft=0;
//    let st=1;
// 	for(let i=1;i<=n;i++){
//         console.log(ft);
//         ft=st
//         st=tt
//     }
// }

// let ans=fibo(5);
// console.log(ans)



// function sum(a,b){
//     return a+b;
// }
// ans = sum(2,4)
// console.log("Addition=",ans)


// function mul(c,d){
//     return c*d;
// }
// ans2 = mul(4,5)
// console.log("Subtraction",ans2)


// function div(e,f){
//     return e/f
// }
// ans3= div(4,2)
// console.log("Divison",ans3)



// function fact(n){
//     let ans = 1;
//     for(let i =1;i<=n;i++){
//      ans = ans*i;
// }
// return ans;
// }
// let ans = fact(7);
// console.log(ans);


// function fibo(a){
//     ft=0;
//     st=1;
//     for (let i =1;i<=a;i++){
//         console.log(ft)
//         tt=ft+st
//         ft=st
//         st=tt
//     }
//     return tt
// }
// console.log(fibo(5))




//Prime
// function prime(n){  
// let count=0;
// for(i=1;i<=n;i++){
//   if(n%i==0){
//     count++;
//   }  
// }
// if (count==2){
//     console.log("Prime")
// }else{
//     console.log("Not")
// }
// }
// prime(7)







// function rev(a){
// let count = 0;
// while(a>0){
//   count =count*10+a%10;
//   a=Math.floor(a/10)
// }
// console.log(count)
// }
// rev(123)
// }


// function odd(){
//   for(i=1;i<=100;i++){
//   if(i%2==1){
//       console.log(i) 
//   }
//     }
// }
// odd()


// function even(){
//   for(i=1;i<=100;i++){
//   if(i%2==0){
//       console.log(i) 
//   }}
// }
// even()



//Print 1 -100
function ot(a){
  for(a=1;a<=100;a++){
    console.log(a)
  }
}
ot()



//Armstrong number
function num(n){    

    let count=0
    let x=n
    while(n>0){
       let d= n%10
        count=count+ d*d*d;
        n= Math.floor(n/10)
       }
     if(count==x){console.log("Armstrong")
     
}else{
    console.log("Not armstroong")
}
}
num(153)

