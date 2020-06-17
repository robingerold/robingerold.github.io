$(document).ready(function() {
    $(".menu-toggle").on("click", function() {
        $("header nav ul").toggleClass("open").fadeIn("slow");
    });
});