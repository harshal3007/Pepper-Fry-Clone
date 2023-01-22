

let sofaProdUrl=`https://63c54f2af3a73b3478530d0f.mockapi.io/EcommerceProducts/`;
let maindata=[];
let container=document.getElementById("container");



//load page add Event Listener
window.addEventListener("load",()=>{
    renderdata(sofaProdUrl)
})



//fetch and renderdata function
function renderdata(url){
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{

    let mydata=data.map((element)=>{
        let  obj={
            image:element.image,
            name:element.name,
            brandName:element.brandName,
            totalPrice:+element["totalPrice"].replaceAll(",",""),
            discount:+element.discount,
            shippingDay:element.shippingDay,
            discountPrice:+element["totalPrice"].replaceAll(",","")-(+element["totalPrice"].replaceAll(",",""))*(+element.discount)/100,

           }
           return obj;
    })
    console.log(mydata);
    //storing data to globally
    maindata=mydata;
    //productCard function call
    productCard(mydata)  
})
.catch((error)=>{
console.log("error")
})
}


// product card creation functionality

function productCard(data){
    container.innerHTML=null;
data.forEach((element,index)=>{

    let div=document.createElement("div");
    let pricediv=document.createElement("div");
        pricediv.setAttribute("id","price");

    let image=document.createElement("img");
        image.setAttribute("src",element.image);
        image.setAttribute("class","image")

    let name=document.createElement("p");
        name.setAttribute("class","name");
        name.innerText=element.name;

    let brandName=document.createElement("p");
        brandName.setAttribute("class","brandName");
        brandName.innerText=element.brandName;

    let totalPrice=document.createElement("p");
        totalPrice.setAttribute("class","totalPrice");
        totalPrice.innerText=element["totalPrice"];

    let discount=document.createElement("p");
        discount.setAttribute("class","discount");
        discount.innerText=element.discount;

    let discountPrice=document.createElement("p");
        discountPrice.setAttribute("class","discountPrice");
        discountPrice.innerText=`${Math.floor((totalPrice.innerText)-(totalPrice.innerText*discount.innerText/100)).toLocaleString("en-US")}`
        let symbolWithDisPrice=discountPrice.innerText;
        symbolWithDisPrice=`₹`

    let shippingDay=document.createElement("p");
        shippingDay.setAttribute("class","shippingDay");
        shippingDay.innerText=`Ships in ${element.shippingDay} day`;

    pricediv.append(discountPrice,totalPrice);
    div.append(image,name,brandName,pricediv,discount,shippingDay);
    container.append(div);
    
})
}
//Sort Functionality
// Highest Price First functionality
    let radioButtonHL=document.getElementById("HL");
    radioButtonHL.onclick=function(){
        sort(maindata)
        function sort(data){
            let sortdata=data.sort((a,b)=>{
                return a.discountPrice-b.discountPrice;
            });
            console.log(sortdata)
            productCard(sortdata)
        }
    }

    //Lowest Price First functionality
    let radioButtonLH=document.getElementById("LH");
    radioButtonLH.onclick=function(){
        sort(maindata)
        function sort(data){
            let sortdata=data.sort((a,b)=>{
                return b.discountPrice-a.discountPrice;
            });
            productCard(sortdata)
        }
    }

    //Sort by ShippingDay functionality
    let radioButtonShippingDay=document.getElementById("shipping");
    radioButtonShippingDay.onclick=function(){
        sort(maindata)
        function sort(data){
            let sortdata=data.sort((a,b)=>{
                return a.shippingDay-b.shippingDay;
            });
            productCard(sortdata)
        }
    }






    //filter functionality
    var array=[];


    var brandNameCheckboxes=document.querySelectorAll(".brandName");
    
    
    function filterdata(checkboxes){
    
    for(var checkbox of checkboxes){
        checkbox.addEventListener("click",function(){
            if(this.checked==true){
                maindata.filter((element)=>{
                    if(element.brandName==this.value){
                        array.push(element)
                        return true;
                    }
                })
                   console.log(array)
            }else{
             array=array.filter((element)=>{
                if(element.brandName!=this.value){
                    return true;
                }
             })
    console.log(array)
            }
    
        })
    }
    }
    filterdata(brandNameCheckboxes)
    
    