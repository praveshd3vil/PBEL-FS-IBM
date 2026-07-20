// let num = 10;

// for(let i = 0; i<num;i++)
// {
//     console.log(i);
// }

// let big5 = ['mriganka', 'rabi', 'deb', 'gareeb'];

// for(let i = 0; i<big5.length; i++)
// {
//     for(let j = 0; j<big5[i].length; j++)
//     {
//         console.log(big5[i][j]);
//     }
// }

// let str = "aman";

// for(let i = 0; i<str.length; i++)
// {
//     console.log(str[i]);
// }

let alph = "abcdefghijklmnopqrstuvwxyz";

for (let i=0; i<alph.length; i++){
    if(i%2==0){
        console.log("This Alphabet", alph[i], "on even index" );
        if(i==10){
            console.log("This alphabet is not special", alph[i])
        }
    }else{
        console.log("This Alphabet", alph[i], "on odd index" );
        if(i==17){
            console.log("This alphabet is not special", alph[i])
        }
    }
}
