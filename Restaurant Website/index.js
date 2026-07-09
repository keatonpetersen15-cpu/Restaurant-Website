const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });

});

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Your table has been reserved!");

    this.reset();

});