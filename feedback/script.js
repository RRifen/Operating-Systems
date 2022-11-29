let close = document.getElementById("close");
close.addEventListener("click", function() {
    window.location.href = "../index.html";
})

document.getElementById("submit-link").onclick = function () {
    this.closest("form").submit();
    return false;
}