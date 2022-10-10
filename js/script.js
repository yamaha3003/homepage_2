console.log("Witam! Proszę zbadać moją prace domową");

let main__button = document.querySelector(".main__button");
let main__table = document.querySelector(".main__table");
let there__name = document.querySelector(".there__name");

main__button.addEventListener("click", () => {

    main__table.classList.toggle("main__table--dark");

    there__name.innerText = main__table.classList.contains("main__table--dark") ? "biały" : "zielony";

});