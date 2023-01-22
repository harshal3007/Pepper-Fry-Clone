const swiper = new Swiper('.swiper', {
  autoplay: {
      delay: 4000,
      disableOnIntraction: false,
  },
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

});

let search = document.getElementById("search__input");

let obj={};
fetch("https://63c6825f4ebaa8028547514e.mockapi.io/bedsheets/")
.then(res=>res.json())
.then(data=>{
console.log(data);
obj=data;

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.style;
  //selected value in search result--end
search.addEventListener("input", (e)=>{
let searchResult=obj.filter((item,index)=>{

  console.log((item.description).includes(e.target.value));
  if((item.description).toLowerCase().includes(e.target.value.toLowerCase())){
    return true
  }
})

searchResult=searchResult.map((data)=>{
  return "<li class='suggestion-list' data-style="+data.style+">"+data.description+"</li>";
})
document.getElementById("search-suggestion").innerHTML=null;
document.getElementById("search-suggestion").innerHTML=searchResult.join(" ");
document.querySelector(".suggestion-list").addEventListener("click",(e)=>{
  // console.log(e.target.dataset.style);
  let searchResult=obj.filter((item,index)=>{
    if(item.style==e.target.dataset.style){
      return true
    }
  })
  if(searchResult[0].brandName=="Divine Casa"){
    window.location.href="./furnishingBlankets.html?style="+e.target.dataset.brandName;
  }
  if(searchResult[0].brandName=="LivPure Smart"){
    window.location.href="./furnishingBlankets.html?style="+e.target.dataset.brandName;
  }
});
})
//selected value in search result--end

});

//selected value in search result--start
//selected value in search result--start

