window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
        document.querySelector("#mainNav").style.backgroundColor = "white"
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "black"
        })
        document.querySelector("#euro").style.color="#ffc527"
        document.querySelector("#mainNav").style.boxShadow = "0 0.5rem 1rem rgb(0 0 0 / 15%"
    } else {
        document.querySelector("#mainNav").style.boxShadow = "none"
        document.querySelector("#mainNav").style.backgroundColor = "transparent"
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "rgba(255, 255, 255, 0.7)"
        })
        document.querySelector("#euro").style.color="#f2f2f2"
        let width = window.screen.width;
        if (width < 992) {
        document.querySelector("#euro").style.color="#ffc527"
            document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
                x.style.color = "black";
            })
            document.querySelector("#mainNav").style.backgroundColor = "white";
        }
        else {
            document.querySelector("#mainNav").style.backgroundColor = "transparent"
            document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
                x.style.color = "rgba(255, 255, 255, 0.7)"
            })
            document.querySelector("#mainNav .navbar-brand").style.color = "rgba(255, 255, 255, 0.7)"
        document.querySelector("#euro").style.color="#f2f2f2"
            
        }
    }
})
window.addEventListener("resize", function () {
    let width = screen.width
    if (width < 992) {
        document.querySelector("#euro").style.color="#ffc527"

        document.querySelector("#mainNav").style.backgroundColor = "white";
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "black";
        })
    }
    else {
        document.querySelector("#mainNav").style.backgroundColor = "transparent"
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "rgba(255, 255, 255, 0.7)"
        })
        document.querySelector("#euro").style.color="#f2f2f2"

    }
})

document.getElementById("arrow-left").addEventListener("click",function(){
    const widthItem = document.querySelector(".list-item").offsetWidth;
    if(document.getElementById("scroll").scrollLeft==0){
        document.getElementById("scroll").scrollLeft = 766.4000244140625;
    }
    else{
        document.getElementById("scroll").scrollLeft -= widthItem;

    }

}) 
document.getElementById("arrow-right").addEventListener("click",function(){
    const widthItem = document.querySelector(".list-item").offsetWidth;
    if(document.getElementById("scroll").scrollLeft == 766.4000244140625){
        document.getElementById("scroll").scrollLeft=0
    }
    else{
        document.getElementById("scroll").scrollLeft += widthItem;

    }
}) 
let z = 0;
document.querySelectorAll(".photo").forEach((item, index) => {
    item.addEventListener("click", function () {
        z = index;
        sabi.src = this.children[0].src;
        document.querySelector(".blank6ekstra").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
    })
})

left_gallery.addEventListener("click", function () {
    let photos = document.querySelectorAll(".photo");
    if (z <= 0) {
        z = photos.length - 1;
    }
    else {
        z--;
    }
    document.querySelector("#sabi").src = photos[z].children[0].src;
})



right_gallery.addEventListener("click", function () {
    let photos = document.querySelectorAll(".photo");
    if (z == photos.length - 1) {
        z = 0;
    }
    else {
        z++;
    }
    document.querySelector("#sabi").src = photos[z].children[0].src;
})


function test() {
    document.querySelector(".blank6ekstra").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
}


