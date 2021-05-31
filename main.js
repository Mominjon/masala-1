const input2 = document.querySelector(`.gacha`)
const button = document.querySelector(`.hisobla`)
const vaqt = document.querySelector(`.vaqt`)
button.addEventListener(`click`, event => {

    let yiguvchi = []
    let x = 0
    let timestart = Date.now()
    while (x < input2.value) {
        x++

        yiguvchi.push(x)
        console.log(yiguvchi)
    }
    let timeout = Date.now()
    let hisob = timeout - timestart
    let aniqhisob = Math.ceil(hisob) / 1000
    const javob = document.createElement(`li`)
    javob.textContent = aniqhisob + `ms`
    if (javob.value > 1000) {
        javob.textContent = +`S`
    }
    javob.style.listStyle = `upper-roman`
    vaqt.appendChild(javob)
})