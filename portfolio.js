window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
        document.querySelector("#mainNav").style.backgroundColor = "white"
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "black"
        })

        document.querySelector("#mainNav").style.boxShadow = "0 0.5rem 1rem rgb(0 0 0 / 15%"
    } else {
        document.querySelector("#mainNav").style.boxShadow = "none"
        document.querySelector("#mainNav").style.backgroundColor = "transparent"
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "black"
        })
        document.querySelector("#euro").style.color="black";
        let width = window.screen.width;
        console.log(width);
        if (width < 992) {
            document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
                x.style.color = "black";
            })
            document.querySelector("#mainNav").style.backgroundColor = "white";
        }
        else {
            document.querySelector("#mainNav").style.backgroundColor = "transparent"
            document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
                x.style.color = "black"
            })
        document.querySelector("#euro").style.color="black";
        }
    }
})
window.addEventListener("resize", function () {
    let width = screen.width
    if (width < 992) {
        document.querySelector("#mainNav").style.backgroundColor = "white";
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "black";
        })
    }
    else {
        document.querySelector("#mainNav").style.backgroundColor = "transparent"
        document.querySelectorAll("#mainNav .navbar-nav .nav-item .nav-link").forEach(x => {
            x.style.color = "black"
        })
        document.querySelector("#euro").style.color="black";

    }
})