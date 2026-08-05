    const sinlgeProductData = JSON.parse(localStorage.getItem("singleProduct"));

    function appendData(singleProductData){
        let leftchild = document.getElementById("leftchild");
        let rightchild = document.getElementById("rightchild");

        let img = document.createElement("img");
        img.src= singleProductData.image;
        img.style.height="300px";
        img.style.width="300px";

        let id = document.createElement("p")
        id.innerText = singleProductData.id;

        leftchild.append(img, id);

        let cat = document.createElement("h3");
        cat.innerText = singleProductData.category;

        let price = document.createElement("p");
        price.innerText =  singleProductData.price;

        let title = document.createElement("p");
        title.innerText = singleProductData.title;

        let ratingDiv = document.createElement("div");
        ratingDiv.style.border = "1px solid yellowgreen";
        ratingDiv.style.display = "flex";
        ratingDiv.style.justifyContent = "space-between";
        let count = document.createElement("p");
        count.innerText = singleProductData.rating.count;
        let rate = document.createElement("p");
        rate.innerText = singleProductData.rating.rate;

        ratingDiv.append(count, rate);

        let desc = document.createElement("p");
        desc.innerText = singleProductData.description;

        rightchild.append(cat, price, title, ratingDiv, desc);

    }
    appendData(sinlgeProductData);
