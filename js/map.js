var linkMap = document.querySelector(".popup-big-map");
var popupMap = document.querySelector(".pop-up-big-map");
var closeMap = popupMap.querySelector(".close-map");
linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("pop-up-big-map-show");
});
closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("pop-up-big-map-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("pop-up-big-map-show")) {
      evt.preventDefault();
      popupMap.classList.remove("pop-up-big-map-show");
    }
  }
});
