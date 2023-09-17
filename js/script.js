// script.js
document.getElementById("toggleContent").addEventListener("click", function() {
    var hiddenContent = document.getElementById("hiddenContent");
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
});
