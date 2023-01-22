let cartdata=JSON.parse(localStorage.getItem("cart"))||[];

let container=document.getElementById("container");


window.addEventListener("load",()=>{
    productCard(cartdata)
})



function productCard(data){
    container.innerHTML=null;
    data.forEach((element,index)=>{
    
        let div=document.createElement("div");

        let pricediv=document.createElement("div");
            pricediv.setAttribute("id","price");
    
    let imgdiv=document.createElement("div");
    imgdiv.setAttribute("class","imgdiv")
        let image=document.createElement("img");
            image.setAttribute("src",element.image);
            image.setAttribute("class","image");

        imgdiv.append(image)    
    
        let name=document.createElement("h2");
            name.setAttribute("class","name");
            name.innerText=element.name;
    
        let brandName=document.createElement("p");
            brandName.setAttribute("class","brandName");
            brandName.innerText=element.brandName;
    
        let totalPrice=document.createElement("p");
            totalPrice.setAttribute("class","totalPrice");
            totalPrice.innerText=`₹ ${element.totalPrice}`;
    
        let discountPrice=document.createElement("p");
            discountPrice.setAttribute("class","discountPrice");
            discountPrice.innerText=`₹ ${element.discountPrice}`
    
        let discount=document.createElement("p");
            discount.setAttribute("class","discount");
            discount.innerText=`${element.discount}% Off`;
    
        let shippingDay=document.createElement("p");
            shippingDay.setAttribute("class","shippingDay");
            shippingDay.innerText=`Ships in ${element.shippingDay} day`;

let removeBtn=document.createElement("button");
    removeBtn.setAttribute("class","remmoveBtn");
    removeBtn.innerText="Remove from the Cart"

    removeBtn.addEventListener("click",()=>{

        data.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(data));
            productCard(cartdata)
    
    })
        
buyBtn=document.createElement("a");
buyBtn.setAttribute("href","./checkout.html");
buyBtn.setAttribute("target","_main");
buyBtn.innerText="Buy Now"



    
        pricediv.append(discountPrice,totalPrice);
        div.append(imgdiv,name,brandName,pricediv,discount,shippingDay,removeBtn,buyBtn);
        container.append(div); 
    })
    }
