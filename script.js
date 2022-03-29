let all = ""

function GetNum(elN) {
    let el = document.getElementsByClassName("values")
    let input = document.getElementById("input")
    el = [...el]
    all += el[elN].textContent
    console.log()
    input.value = all
}

function Equal() {
    let input = document.getElementById("input")
    let result = eval(all)
    input.value = result
    all = eval(all)
}

function Clear() {
    all = ""
    let input = document.getElementById("input")
    input.value = ""
}



