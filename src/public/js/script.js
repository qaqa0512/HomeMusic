var tabs = document.querySelectorAll(".tab-details ul li");
var tabs_warp = document.querySelectorAll(".tap-warp");

tabs.forEach(function(tab, tab_index) {
    tab.addEventListener("click", function() {
        tabs.forEach(function(tab) {
            tab.classList.remove("active");
        })
        tab.classList.add("active");

        tabs_warp.forEach(function(content, content_index) {
            if (content_index == tab_index) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        })
    })
});

// --------- scrolled ------------- //
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// --------- search ----------//
var searchBtn = document.querySelector(".searchbtn");
var searchBox = document.querySelector(".search");
var searchInput = document.querySelector(".typing");
searchBtn.onclick = () => {
    searchInput.classList.add("active-width");
}