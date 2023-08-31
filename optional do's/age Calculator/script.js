let captureChild = document.querySelectorAll('.formA')
let btnLabel = document.querySelector('.buttonLabel')
let errorMsg = document.querySelectorAll('.hide')
let labelErr = document.querySelectorAll('.labelA')
let inputErr = document.querySelectorAll('.styleInput')
let errorText = document.querySelectorAll('.hiddenText')
let d = document.querySelector('.date')
let m = document.querySelector('.mon')
let y = document.querySelector('.year')
let sectionB = document.querySelectorAll('.sectionBdiv')

let capture = { year: y.innerHTML, month: m.innerHTML, date: d.innerHTML }

let emptyArray = []

for (let out in captureChild) {
    let store = captureChild[out]
    emptyArray.push(store)
}
let isValid = { dateCheck: true, monthCheck: true, yearCheck: true }
btnLabel.onclick = (() => {
    let storeDate = emptyArray[0].children[1].value
    let storeMon = emptyArray[1].children[1].value
    let storeYear = emptyArray[2].children[1].value
    // console.log(capture['date'])
    // let arr = []
    // arr.push(storeDate, storeMon, storeYear)

    if (storeDate === '' && storeMon === '' && storeYear === '') {
        // labelErr.classList.add('labelError')
        for (let out of labelErr) {
            out.classList.add('labelError')
        }
        for (let inn of inputErr) {
            inn.classList.add('inputErr')
        }
        for (let next of errorText) {
            next.innerHTML = "field is required"
            next.classList.add('hiddenText')
        }
    }
    else {
        let storeAllDates = new Date()
        let currMon = storeAllDates.getMonth() + 1
        let currYear = storeAllDates.getFullYear()

        function passMonth(storeMon) {
            if (storeMon > 12 || storeMon < 0) {
                inputErr[1].classList.add('inputErr')
                errorText[1].innerHTML = "enter valid month"
                errorText[1].classList.add('hiddenText')
                labelErr[1].classList.add('labelError')
                isValid['monthCheck'] = false
            }
            else {
                inputErr[1].classList.remove('inputErr')
                errorText[1].innerHTML = " "
                errorText[1].classList.remove('hiddenText')
                labelErr[1].classList.remove('labelError')
                isValid['monthCheck'] = true
                capture['month'] = (storeMon <= currMon) ? currMon - storeMon : calc();

                function calc() {
                    let cap = storeMon - currMon
                    let min = currMon - cap
                    return cap + min
                }
            }
        }
        passMonth(storeMon)

        function passDate(storeDate) {
            if (storeDate > 32 || storeDate < 0 || storeDate === '') {
                inputErr[0].classList.add('inputErr')
                errorText[0].innerHTML = "enter valid date"
                errorText[0].classList.add('hiddenText')
                labelErr[0].classList.add('labelError')
                isValid['dateCheck'] = false
            }
            else {
                inputErr[0].classList.remove('inputErr')
                errorText[0].innerHTML = " "
                errorText[0].classList.remove('hiddenText')
                labelErr[0].classList.remove('labelError')
                isValid['dateCheck'] = true
                // capture['date'] = capture['month']
                let sum = 0
                for (let out = 1; out <= capture['month']; out++) {
                    if (out % 2 !== 0) {
                        sum += 1
                    }
                }
                capture['date'] = (((capture['month'] * 30) + sum) - 2) / 7
            }
        }
        passDate(storeDate)
        let yr
        let storeLeapYear
        function passYear(storeYear) {
            // if (storeYear % 4 === 0 || storeYear % 400 === 0 || storeYear % 100 !== 0) {
            //     storeLeapYear = 366
            // }
            // else {
            //     storeLeapYear = 365
            // }
            (storeYear <= currYear) ? loop() : isValid['yearCheck'] = false;
            function loop() {
                let sum = 0
                for (let out = storeYear; out <= currYear; out++) {
                    if (storeYear % 4 === 0 && storeYear % 400 === 0 && storeYear % 100 !== 0) {
                        sum += 1
                    }
                }
                isValid['bool'] = 'true'
                capture['date'] += sum
                yr = currYear - storeYear
            }
        }
        passYear(storeYear)

        function roaming() {
            let inn = 0
            let timer
            timer = setInterval(() => {
                sectionB[0].firstElementChild.innerHTML = inn
                if (inn === yr) {
                    clearInterval(timer)
                }
                inn++
            }, 100)

            let secInn = 0
            let secTimer = setInterval(() => {
                sectionB[1].firstElementChild.innerHTML = secInn
                secInn += 1
                if (secInn > capture['month']) {
                    clearInterval(secTimer)
                }
            }, 100)

            let thirdInn = 0
            let thirdTimer = setInterval(() => {
                sectionB[2].firstElementChild.innerHTML = thirdInn
                thirdInn += 1
                if (thirdInn > capture['date']) {
                    clearInterval(thirdTimer)
                }
            }, 10)
        }

        if (isValid['dateCheck'] && isValid['monthCheck'] && isValid['yearCheck']) {
            roaming()
        }
    }
})