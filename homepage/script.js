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

const searchInput = document.getElementById("search__button");
searchInput.addEventListener("click", function() {
    const searchValue = this.value;
    fetch(`/search?q=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        const resultsContainer = document.getElementById("search-results");
        const results = data.results;
        results.forEach(result => {
          const li = document.createElement("li");
          li.innerHTML = result.title;
          resultsContainer.appendChild(li);
        });
        
    });
  
});

