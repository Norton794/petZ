let input = document.getElementById("fileUp");
let span = document.getElementById("path");

input.addEventListener('change', function() {
    span.textContent = this.value.slice(12);
});


$("#btn").click(function() {
    let target = $("#secCad").offset().top;
    console.log(target);
    $("html, body").animate({
        scrollTop: target
    }, 500);
});