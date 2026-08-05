// let num = prompt("Enter a number: ");

// if(num%3==0){
//     console.log("humpty");
// }else if(num%5==0){
//     console.log("dumpty");
// }else if(num%3==0 && num%5==0){
//     console.log("humpty,dumpty");
// }else{
//     console.log("No humpty, No dumpty");
// }

// let str = "we are a full stack batch";
// let vowels = ["a","e","i", "o",'u', 'A','E','I','O','U']
// for(let i = 0; i<str.length;i++)
//     if (vowels.includes(str[i])) 
//     {
//         console.log(str[i]);
//     }


// let obj = {
//     eng: 200,
//     mat: 58,
//     psy: 12,
//     coding: 100
// }

// let max = 0;
// let sub = "";
// for(let i in obj)
// {
//     if(obj[i]>max)
//     {
//         max = obj[i]
//         sub = i
//     }
// }
// console.log(sub,":",max);


//functions
sum(1,2,3); // can be use before declaring

function sum(a,b,c){
    let out = a+b+c;
    console.log(out);
}
sum(1,2,3); // can be use before declaring

const arrowFun = (a,b,c) => { //can only called after the function is declared 
    let out = a+b+c;
    console.log(out);
}

arrowFun(10,10,10); //use only after declaring