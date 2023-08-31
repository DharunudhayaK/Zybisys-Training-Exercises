let button = document.querySelector('.addButton')
let inputLabel = document.querySelector('.inputBox')
let contentStoreC = document.querySelector('.contentC')

let emptyArray

button.onclick = (() => {
    let storeInputVal = inputLabel.value
    localStorage.setItem('storeValue', JSON.stringify([...JSON.parse(localStorage.getItem("storeValue") || "[]"), storeInputVal]))
    emptyArray = JSON.parse(localStorage.getItem("storeValue"))
    passInputVal(emptyArray)
    inputLabel.value = ' '
})

function passInputVal(emptyArray) {
    contentStoreC.innerHTML = "";
    emptyArray.map((value) => {
        let outerDiv = document.createElement('div')
        outerDiv.setAttribute('class', 'contentLabel')
        contentStoreC.appendChild(outerDiv)

        let createPara = document.createElement('p')
        createPara.innerText = value
        outerDiv.appendChild(createPara)

        let exit = document.createElement('span')
        exit.setAttribute('class', 'close')
        exit.innerHTML = "&times"
        outerDiv.appendChild(exit)

        createPara.onclick = (() => {
            createPara.style.textDecoration = "line-through"
            // removeEle(emptyArray)
        })

        exit.addEventListener("click", function () {
            contentStoreC.removeChild(outerDiv)
        })
    })

}

// function removeEle(storeInputVal) {
//     console.log(storeInputVal);
//     for (let out in storeInputVal) {
//         storeInputVal.indexOf(storeInputVal[out])
//     }
// }