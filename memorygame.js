let Cardarray = [
    {
        name: "cheeseburger",
        img: "/Memorygame/images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "/Memorygame/images/fries.png"
    },
    {
        name: "hotdog",
        img: "/Memorygame/images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "/Memorygame/images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "/Memorygame/images/milkshake.png"
    },
    {
        name: "pizza",
        img: "/Memorygame/images/pizza.png"
    },
    {
        name: "cheeseburger",
        img: "/Memorygame/images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "/Memorygame/images/fries.png"
    },
    {
        name: "hotdog",
        img: "/Memorygame/images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "/Memorygame/images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "/Memorygame/images/milkshake.png"
    },
    {
        name: "pizza",
        img: "/Memorygame/images/pizza.png"
    }
    ]

Cardarray.sort(() => 0.5 - Math.random())

//console.log(Cardarray);

let Grid = document.getElementById("grid")
let Dataidarray = []
let Dataidnamearray = []

let Choosedid = []

function opengame() {

    for (let i = 0; i <= 11; i++) {

        let Card = document.createElement("img")
        Card.setAttribute("src", "/Memorygame/images/blank.png")
        Card.setAttribute("dataid", i)
        Card.addEventListener("click", flipCard)

        Grid.appendChild(Card)
    }
}

opengame()

function flipCard() {
    let Dataid = this.getAttribute("dataid")

    Dataidarray.push(Dataid)
    Dataidnamearray.push(Cardarray[Dataid].name)

    this.setAttribute("src", `${Cardarray[Dataid].img}`)


    console.log(Dataidnamearray);
    console.log(Dataidarray);

    if (Dataidarray.length == 2) {
        setTimeout(check, 500)
    }

}

function check() {
    let card = document.querySelectorAll("img")
    if (Dataidarray[0] == Dataidarray[1]) {
        alert("can't choose same card")


    }

    else if (Dataidnamearray[0] == Dataidnamearray[1]) {

        Choosedid.push(Dataidarray[0], Dataidarray[1])

        card[Dataidarray[0]].setAttribute("src", "/Memorygame/images/white.png")
        card[Dataidarray[1]].setAttribute("src", "/Memorygame/images/white.png")
        
        card[Dataidarray[0]].removeEventListener("click",flipCard)
        card[Dataidarray[1]].removeEventListener("click",flipCard)



    } else {

        card[Dataidarray[0]].setAttribute("src", "/Memorygame/images/blank.png")
        card[Dataidarray[1]].setAttribute("src", "/Memorygame/images/blank.png")
    }

    if (Choosedid == (Cardarray.length) / 2) {
        let ResultEl = document.getElementById("result")
        ResultEl.textContent = "You won"
    }


    Dataidarray = []
    Dataidnamearray = []

}