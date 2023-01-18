
    var enterPincode = document.getElementById("enterPincode");
    var myPopup = document.getElementById("myPopup");
    var closePopup = document.getElementById("closePopup");
  
    enterPincode.addEventListener("click", function(){
      myPopup.style.display = "block";
    });
  
    closePopup.addEventListener("click", function(){
      myPopup.style.display = "none";
    });