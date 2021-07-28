let input = document.getElementById("fileUp");
let span = document.getElementById("path");

input.addEventListener('change', function() {
    span.textContent = this.value.slice(12);
});