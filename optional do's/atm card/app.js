let formContent = document.querySelector('.formContainer')
let frontImg = document.querySelector('.frontCard')
let errLast = document.querySelector('.lastInput')
let digitContent = document.querySelector('.digitInput')
let monYearCvv = document.querySelector('.frontEnd')
let cvvNumber = document.querySelector('.backCard')

let object = { name: formContent.children[0][0], number: formContent.children[1][0], month: formContent.children[2][0], year: formContent.children[2][1], cvv: formContent.children[2][2], button: formContent.lastElementChild, digits: digitContent.children }
let cardObj = { name: frontImg.children[2], mon: monYearCvv.children[0], yar: monYearCvv.children[2], cvvNum: cvvNumber.children[0] }
let errObj = { err1: formContent.children[0].lastElementChild, err2: formContent.children[1].lastElementChild, err4: errLast.children[0].lastElementChild, err5: errLast.children[1].lastElementChild, err6: errLast.children[2].lastElementChild }

let isValidated = { isValid: false }

object['name'].oninput = (function () {
    let nameInput = object['name'].value
    let nameRegex = /\s/;
    (nameRegex.test(nameInput)) ? isValidated['isValid'] = true : isValidated['isValid'] = false;
    cardObj['name'].innerText = nameInput
})

object['number'].oninput = (function () {
    let numberRegex = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
    let digitInput = object['number'].value;
    (numberRegex.test(digitInput)) ? isValidated['isValid'] = true : isValidated['isValid'] = false
    let out = 0
    while (out < object['digits'].length) {
        object['digits'][out].innerText = digitInput
        out++
    }
})

object['month'].oninput = (function () {
    let mon = object['month'].value;
    (mon > 0 && mon < 13) ? isValidated['isValid'] = true : isValidated['isValid'] = false
    cardObj['mon'].innerText = mon
})

object['year'].oninput = (function () {
    let y = object['year'].value;
    (y > 22 && y < 33) ? isValidated['isValid'] = true : isValidated['isValid'] = false
    cardObj['yar'].innerText = y
})

object['cvv'].oninput = (function () {
    let c = object['cvv'].value;
    (c > 99 && c < 1000) ? isValidated['isValid'] = true : isValidated['isValid'] = false
    cardObj['cvvNum'].innerText = c
})

object['button'].onclick = (function () {
    if (object['name'].value === '' || object['number'].value === ' ' || object['month'].value === ' ' || object['number'].value === ' ' || object['year'].value === ' ') {
        errObj['err1'].innerHTML = "can't be blank"
        errObj['err2'].innerHTML = "Can't be blank or more/less than 16 digits"
        errObj['err4'].innerHTML = "Invalid month"
        errObj['err5'].innerHTML = "Card expired"
        errObj['err6'].innerHTML = "Invalid CVV"
        object['number'].style.border = "1px solid red"
        object['name'].style.border = "1px solid red"
        object['cvv'].style.border = '1px solid red'
        object['month'].style.border = '1px solid red'
        object['year'].style.border = '1px solid red'
    }
    else {
        errObj['err1'].innerHTML = ""
        errObj['err2'].innerHTML = ""
        errObj['err4'].innerHTML = ""
        errObj['err5'].innerHTML = ""
        errObj['err6'].innerHTML = ""
        object['number'].style.border = "none"
        object['name'].style.border = "none"
        object['cvv'].style.border = 'none'
        object['month'].style.border = 'none'
        object['year'].style.border = 'none'
    }
})