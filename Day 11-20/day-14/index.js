async function getData()
{
    const res = await fetch ("https://fakestoreapi.com/products")
    const response = await res.json();
    // console.log(response);

    appendData(response);

}

function appendData(data)
{
    const parentDiv = document.getElementById("parent");
    // parentDiv.style.display = "grid";


    data.forEach((el, i) => {
        const childDiv = document.createElement("div");
        childDiv.style.border = "1px solid blue";
        // childDiv.style.width = "20%";
        childDiv.style.textAlign = "center";
        childDiv.style.boxShadow = "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;";

        const cat = document.createElement("p");
        cat.innerText = el.category;

        const img = document.createElement("img");
        img.src = el.image;
        img.style.width = "200px";
        img.style.height = "200px"
        const price = document.createElement("p")
        price.innerText = el.price;

        const title = document.createElement("p");
        title.innerText = el.title;

        const desc = document.createElement("p")
        desc.innerText = el.description;

        const button = document.createElement("button")
        button.innerText = "Buy now"
        button.style.border = "1px solid none"
        button.style.padding = "5px"
        button.style.width = "100%"
        button.style.backgroundColor = "yellowgreen"
        button.style.color = "black"

        childDiv.append(cat, img, title, price, desc, button);

        parentDiv.append(childDiv);
    });
    // console.log(data);
}

getData()