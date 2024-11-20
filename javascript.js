let brukerPoeng = 0
let robotPoeng = 0

function play(value) {
    const choices = ["stein", "saks", "papir"]
    let robot = choices[Math.floor(Math.random() * 3)]
    if (!choices.includes(value)) {
        console.log("Ikke godkjent valg")
    }
    if (value === robot) {
        console.log("Uavgjort")
    }
    else if (value === "stein" & robot === "saks") {
        console.log("Du vant")
    }
    else if (value === "papir" & robot === "stein") {
        console.log("Du vant")
    }
    else if (value === "saks" & robot === "papir") {
        console.log("Du vant")
    }
    else {
        console.log("Dataen vant")
    }
}