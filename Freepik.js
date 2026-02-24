let menu = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", () => {
    console.log("button was clicked");
    sidebar.classList.toggle("side-position");


})


// async function getimage() {
//     let images = await axios.get("https://images.dog.ceo/breeds/brabancon/n02112706_967.jpg");
//     let a = await images.config.url;
//     console.log(a);

// }
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
console.dir(btn1.innerHTML);
let box1 = document.querySelector(".box1");
let b1 = document.querySelector(".b1");
let box2 = document.querySelector(".box2");
let b2 = document.querySelector(".b2");
let box3 = document.querySelector(".box3");
let b3 = document.querySelector(".b3");
let box4 = document.querySelector(".box4");
let b4 = document.querySelector(".b4");
let box5 = document.querySelector(".box5");
let b5 = document.querySelector(".b5");
let box6 = document.querySelector(".box6");
let b6 = document.querySelector(".b6");
let box7 = document.querySelector(".box7");
let b7 = document.querySelector(".b7");

btn1.addEventListener("click", () => {
    console.log("button was clicked");
    box1.classList.toggle("opacity");
    b1.classList.toggle("rotate");
    if (box2.classList.contains("opacity")) {
        box2.classList.toggle("opacity");
        b2.classList.toggle("rotate");
    }
    if (box3.classList.contains("opacity")) {
        box3.classList.toggle("opacity");
        b3.classList.toggle("rotate");
    }
    if (box4.classList.contains("opacity")) {
        box4.classList.toggle("opacity");
        b4.classList.toggle("rotate");
    }
    if (box5.classList.contains("opacity")) {
        box5.classList.toggle("opacity");
        b5.classList.toggle("rotate");

    }
    if (box6.classList.contains("opacity")) {
        box6.classList.toggle("opacity");
        b6.classList.toggle("rotate");

    }
    if (box7.classList.contains("opacity")) {
        box7.classList.toggle("opacity");
        b7.classList.toggle("rotate");

    }

})

btn2.addEventListener("click", () => {
    console.log("button was clicked");
    box2.classList.toggle("opacity");
    b2.classList.toggle("rotate");
    if (box1.classList.contains("opacity")) {
        box1.classList.toggle("opacity");
        b1.classList.toggle("rotate");
    }
    if (box3.classList.contains("opacity")) {
        box3.classList.toggle("opacity");
        b3.classList.toggle("rotate");
    }
    if (box4.classList.contains("opacity")) {
        box4.classList.toggle("opacity");
        b4.classList.toggle("rotate");
    }
    if (box5.classList.contains("opacity")) {
        box5.classList.toggle("opacity");
        b5.classList.toggle("rotate");

    }
    if (box6.classList.contains("opacity")) {
        box6.classList.toggle("opacity");
        b6.classList.toggle("rotate");

    }
    if (box7.classList.contains("opacity")) {
        box7.classList.toggle("opacity");
        b7.classList.toggle("rotate");

    }
})

btn3.addEventListener("click", () => {
    console.log("button was clicked");
    box3.classList.toggle("opacity");
    b3.classList.toggle("rotate");
    if (box1.classList.contains("opacity")) {
        box1.classList.toggle("opacity");
        b1.classList.toggle("rotate");
    }
    if (box2.classList.contains("opacity")) {
        box2.classList.toggle("opacity");
        b2.classList.toggle("rotate");
    }

    if (box4.classList.contains("opacity")) {
        box4.classList.toggle("opacity");
        b4.classList.toggle("rotate");
    }
    if (box5.classList.contains("opacity")) {
        box5.classList.toggle("opacity");
        b5.classList.toggle("rotate");

    }
    if (box6.classList.contains("opacity")) {
        box6.classList.toggle("opacity");
        b6.classList.toggle("rotate");

    }
    if (box7.classList.contains("opacity")) {
        box7.classList.toggle("opacity");
        b7.classList.toggle("rotate");

    }

})

btn4.addEventListener("click", () => {
    console.log("button was clicked");
    box4.classList.toggle("opacity");
    b4.classList.toggle("rotate");
    if (box1.classList.contains("opacity")) {
        box1.classList.toggle("opacity");
        b1.classList.toggle("rotate");
    }
    if (box2.classList.contains("opacity")) {
        box2.classList.toggle("opacity");
        b2.classList.toggle("rotate");
    }
    if (box3.classList.contains("opacity")) {
        box3.classList.toggle("opacity");
        b3.classList.toggle("rotate");
    }
    if (box5.classList.contains("opacity")) {
        box5.classList.toggle("opacity");
        b5.classList.toggle("rotate");

    }
    if (box6.classList.contains("opacity")) {
        box6.classList.toggle("opacity");
        b6.classList.toggle("rotate");

    }
    if (box7.classList.contains("opacity")) {
        box7.classList.toggle("opacity");
        b7.classList.toggle("rotate");

    }
})

btn5.addEventListener("click", () => {
    console.log("button was clicked");
    box5.classList.toggle("opacity");
    b5.classList.toggle("rotate");
    if (box1.classList.contains("opacity")) {
        box1.classList.toggle("opacity");
        b1.classList.toggle("rotate");
    }
    if (box2.classList.contains("opacity")) {
        box2.classList.toggle("opacity");
        b2.classList.toggle("rotate");
    }
    if (box3.classList.contains("opacity")) {
        box3.classList.toggle("opacity");
        b3.classList.toggle("rotate");
    }
    if (box4.classList.contains("opacity")) {
        box4.classList.toggle("opacity");
        b4.classList.toggle("rotate");
    }
    if (box6.classList.contains("opacity")) {
        box6.classList.toggle("opacity");
        b6.classList.toggle("rotate");

    }
    if (box7.classList.contains("opacity")) {
        box7.classList.toggle("opacity");
        b7.classList.toggle("rotate");

    }
})

btn6.addEventListener("click", () => {
    console.log("button was clicked");
    box6.classList.toggle("opacity");
    b6.classList.toggle("rotate");
    if (box1.classList.contains("opacity")) {
        box1.classList.toggle("opacity");
        b1.classList.toggle("rotate");
    }
    if (box2.classList.contains("opacity")) {
        box2.classList.toggle("opacity");
        b2.classList.toggle("rotate");
    }
    if (box3.classList.contains("opacity")) {
        box3.classList.toggle("opacity");
        b3.classList.toggle("rotate");
    }
    if (box4.classList.contains("opacity")) {
        box4.classList.toggle("opacity");
        b4.classList.toggle("rotate");
    }
    if (box5.classList.contains("opacity")) {
        box5.classList.toggle("opacity");
        b5.classList.toggle("rotate");

    }
    if (box7.classList.contains("opacity")) {
        box7.classList.toggle("opacity");
        b7.classList.toggle("rotate");

    }
})

btn7.addEventListener("click", () => {
    console.log("button was clicked");
    box7.classList.toggle("opacity");
    b7.classList.toggle("rotate");
    if (box1.classList.contains("opacity")) {
        box1.classList.toggle("opacity");
        b1.classList.toggle("rotate");
    }
    if (box2.classList.contains("opacity")) {
        box2.classList.toggle("opacity");
        b2.classList.toggle("rotate");
    }
    if (box3.classList.contains("opacity")) {
        box3.classList.toggle("opacity");
        b3.classList.toggle("rotate");
    }
    if (box4.classList.contains("opacity")) {
        box4.classList.toggle("opacity");
        b4.classList.toggle("rotate");
    }
    if (box5.classList.contains("opacity")) {
        box5.classList.toggle("opacity");
        b5.classList.toggle("rotate");

    }
    if (box6.classList.contains("opacity")) {
        box6.classList.toggle("opacity");
        b6.classList.toggle("rotate");

    }
})