let btn1 = document.querySelector(".fa-bars");
let btn2 = document.querySelector(".fa-xmark");
let modal = document.querySelector(".modal-quvonchbek");

btn1.onclick = () => {
    modal.style.transform = "scale(1)";
};
btn2.onclick = () => {
    modal.style.transform = "scale(0)";
};