// Adding Event Listener

var numberOfbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; numberOfbuttons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");
});
}
