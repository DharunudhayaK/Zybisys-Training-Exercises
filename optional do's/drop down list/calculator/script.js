let mainCotent = document.querySelectorAll('.digits')
let operatorsEvent = document.querySelectorAll('.opertors')
let captureDigit = document.querySelector('.number')
let del = document.querySelector('.deleteButton')
let reset = document.querySelector('.footButtonA')
let sml = document.querySelector('.small')
let wholeContent = document.querySelector('.contentPart')
let theme = document.querySelector('.themeBorder')

let obj = { themeChildNodes: theme.children }
let empObj = { firstButton: obj['themeChildNodes'][0], secondButton: obj['themeChildNodes'][1], thirdButton: obj['themeChildNodes'][2] }

empObj['firstButton'].onclick = (() => {
    console.log("hello");
})

empObj['secondButton'].onclick = (() => {
    empObj['secondButton'].classList.add('showOff')
    document.querySelector('.body').classList.add('window')
    document.querySelector('.headPart').classList.add('window')
    document.querySelector('.getNumber').classList.add('displayBoard')
    wholeContent.classList.add('numBox')
    theme.classList.add('theme')
    empObj['firstButton'].classList.add('hidden')
    empObj['thirdButton'].classList.add('hidden')
})

empObj['thirdButton'].onclick = (() => {

})

let captureChildren = mainCotent

for (let out of captureChildren) {
    out.onclick = (() => {
        captureDigit.append(out.innerHTML)
    })
}

var add = 0, mul = 1, divi = 1;

let operatorsValid = { plus: true, minus: true, product: true, div: true }
for (let out of operatorsEvent) {
    out.onclick = function () {
        let operation = out.innerHTML
        switch (operation) {
            case '+':
                (!captureDigit.innerHTML) ? operatorsValid['plus'] = false : captureDigit.append(operation)
                sml.innerHTML = captureDigit.innerHTML
                sum(sml.innerHTML)
                captureDigit.innerHTML = ""
                break;
            case '-':
                (!captureDigit.innerHTML) ? operatorsValid['minus'] = false : captureDigit.append(operation)
                sml.innerHTML = captureDigit.innerHTML
                sub(sml.innerHTML)
                captureDigit.innerHTML = ""
                break;
            case '*':
                (!captureDigit.innerHTML) ? operatorsValid['product'] = false : captureDigit.append(operation)
                sml.innerHTML = captureDigit.innerHTML
                product(sml.innerHTML)
                captureDigit.innerHTML = ""
                break;
            case '/':
                (!captureDigit.innerHTML) ? operatorsValid['div'] = false : captureDigit.append(operation)
                sml.innerHTML = captureDigit.innerHTML
                divisors(sml.innerHTML)
                captureDigit.innerHTML = ""
                break;
        }
    }
}

function sum(addSum) {
    let storeSum = addSum.split('').join('')
    add += parseFloat(storeSum)
    return switchOver(add)

    function switchOver(add) {
        sml.innerHTML = add + "+"
        captureDigit.innerHTML = add
        return sml.innerHTML, captureDigit.innerHTML
    }
}

function sub(subNo) {
    let storeSum = subNo.split('').join('')
    console.log(storeSum);
    add -= parseInt(storeSum);
    return subPass(add);

    function subPass(add) {
        sml.innerHTML = add
        captureDigit.innerHTML = add
        return sml.innerHTML, captureDigit.innerHTML
    }
}

function product(productNo) {
    let storeSum = productNo.split('').join('')
    let store = parseFloat(storeSum)
    mul *= store
    return proOver(mul)

    function proOver(add) {
        sml.innerHTML = add + "*"
        captureDigit.innerHTML = add
        return sml.innerHTML, captureDigit.innerHTML
    }
}

function divisors(divNo) {
    let storeSum = divNo.split('').join('')
    let store = parseFloat(storeSum)
    store = Math.ceil(store / divi)
    divi = store
    return proOver(divi)

    function proOver(add) {
        sml.innerHTML = add + "/"
        captureDigit.innerHTML = add
        return sml.innerHTML, captureDigit.innerHTML
    }
}

reset.onclick = (() => {
    while (captureDigit.firstChild) {
        captureDigit.removeChild(captureDigit.firstChild);
    }
    while (sml.firstChild) {
        sml.removeChild(sml.firstChild)
    }
})
del.onclick = (() => {
    let a = captureDigit.innerHTML.split("")
    a.splice(-1, 1)
    captureDigit.innerHTML = a.join("")
})

wholeContent.lastElementChild.onclick = (() => {
    // captureDigit.innerHTML = sml.innerHTML.split('')
    captureDigit.innerHTML = sml.innerHTML.split('').slice(0, -1).join('')
    while (sml.firstChild) {
        sml.removeChild(sml.firstChild)
    }
})