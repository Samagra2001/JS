// let myObj={
//     name : "Samagra",
//     age:19,
//     mail:"samagrarajoria20011709@gmail.com",
//     address:{
//         house:{
//             houseNumber: 27,
//             block : "A",
//         },
//         city: "Gwalior",
//         pincode:474001,
//         country:"India",
//     },
// };
// myObj.phone="989796543"; // new bn jayga
// myObj.name="Samagra Rajoria"; // already hoga to update ho jayga
// // console.log(myObj)
// myObj.address.house.houseNumber="67";
// console.log(myObj.address.house.houseNumber);


let aObj = {
    name: "Samagra",
    address: {
        house: {
            houseNumber: 34,
            blockNumber: "D",
            personal: {
                bank: {
                    atm: "bank of india",
                    pin: {
                        atmPin: "78695"
                    }
                }
            }
        },
        city: "Gwalior",
        pincode: 474001,
        country: "India",
    },
};
aObj.phone = "7987426551"; //Update
aObj.name = "Samagra Rajoria"; //Update
aObj.address.house.houseNumber = "78"; //Update
aObj.address.house.personal.bank.pin.atmPin = "1234"; // if their is then it will be updated
aObj.address.house.personal.bank.pin.bankPin = "342534265"  //Add new if their is no 
console.log(aObj.address.house.personal.bank.pin.bankPin);