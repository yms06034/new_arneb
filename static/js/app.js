function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function initPopup() {
  document.getElementById('popup1').style.display = "block";

  document.getElementById('hide1dayBtn').addEventListener('click', function() {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    document.cookie = 'popup1=hidden; expires=' + expirationDate.toUTCString() + '; path=/;';

    closePopup('popup1');
  });

  document.getElementById('closeBtn').addEventListener('click', function() {
    closePopup('popup1');
  });

  document.getElementById('closeBtn2').addEventListener('click', function() {
    closePopup('popup2');
  });
}
window.addEventListener('load', function() {
  initPopup();
});

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.15) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);