{
    const welcome = () => {
        console.log("Witam! Proszę zbadać moją prace domową");
    }

    const toggleBackroundTable = () => {
        const main__table = document.querySelector(".main__table");
        const there__name = document.querySelector(".there__name");
        main__table.classList.toggle("main__table--dark");

        there__name.innerText = main__table.classList.contains("main__table--dark") ? "biały" : "zielony";

    };
    const init = () => {
        const main__button = document.querySelector(".main__button");
        main__button.addEventListener("click", toggleBackroundTable);

        welcome();
    }

    init();
}

