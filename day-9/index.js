//obj stores in alphabetical order
let obj = {
    name : "John", 
    uni : "Hav",
    course : "MCA",
    year : 2025,
    isalumni : false,
    sub: ["py", "fs", "web", "ai"],
    hobbies: {
        books: ["1","2","3"],
        listening: "we are the champions"
    },
    test: 
    {
        test1: {
            test2:{
                test3:{
                    rs: 100
                }
            }
        }
    }
}

console.log(obj);

//access elements
let fvalue = obj["name"];
console.log(fvalue);


console.log(obj.year);

//change the value
obj["course"] = "Ma";
console.log(obj);

//deleting a key value pair
delete obj["year"];
console.log(obj);

//access a nested obj
console.log(obj.test.test1.test2.test3["rs"]);
console.log(obj.test.test1.test2.test3[100]);
console.log(obj.test.test1.test2.test3.rs);