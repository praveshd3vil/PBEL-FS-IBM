// const para = document.getElementById("para");

// para.innerText="This is para"
// para.style.border =  "1px solid red"
// para.style.background = "teal"
// para.style.color = "black"

// const btnDiv = document.getElementById("btn"); 
// const btn = document.createElement("button");
// btn.innerText="Click Me";
// btn.style.padding="10px";
// btn.style.border="none";
// btn.style.backgroundColor="teal";
// btn.style.color="white";
// btn.style.borderRadius="5px"
// btnDiv.append(btn)

// btn.addEventListener("click",()=> {
//     console.log("event listerner button")
// })


// let form = document.getElementById("form");
// form.addEventListener("submit",(e)=>
// {
//     e.preventDefault();

//     let fname = document.getElementById("fname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;


//     let obj ={ fname, email, password}
//     console.log(obj);
// })



// console.log(this)
//  console.log(this.window);

obj = 
{
    name: "ronaldo",
    age: 15,
    // fun:function() => {
    //     // console.log(this)
    //     // console.log(this.window);
    //     console.log(this.name.value)

    // }


    //  fun:function(){
    //     // console.log(this)
    //     // console.log(this.window);
    //     console.log(this.name)

    // }
}
obj.fun();