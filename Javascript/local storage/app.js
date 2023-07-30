let button = document.querySelector('.addButton')
let inputLabel = document.querySelector('.inputBox')
let contentStoreC = document.querySelector('.contentC')

// let todo = document.querySelector('.todoLabel')
// todo.addEventListener("dblclick",(event)=>{
//     event.preventDefault();
//     console.log("hello");
// })

let emptyArray

button.onclick = (() => {
    let storeInputVal = inputLabel.value
    localStorage.setItem('storeValue',
        JSON.stringify([...JSON.parse(localStorage.getItem("storeValue") || "[]"), storeInputVal]))
    emptyArray = JSON.parse(localStorage.getItem("storeValue"))
    passInputVal(emptyArray)
    inputLabel.value = ' '
})

function passInputVal(emptyArray) {

    contentStoreC.innerHTML = "";
    for (var i = 0; i < emptyArray.length; i++) {
        let createPara = document.createElement('p')
        console.log(emptyArray);
        createPara.innerText = emptyArray[i]

        contentStoreC.appendChild(createPara)

        createPara.onclick = (() => {
            createPara.style.textDecoration = "line-through"
            removeEle(emptyArray)
        })

        createPara.addEventListener("dblclick", function () {
            console.log("hycy")
            contentStoreC.removeChild(createPara)
            // removeEle(emptyArray[i])
        })
    }

}

function removeEle(storeInputVal) {
    for (let out in storeInputVal) {
        let store = storeInputVal.indexOf(storeInputVal[out])
        console.log(store);
    }
}

window.onload = () => {
    emptyArray = JSON.parse(localStorage.getItem('storeValue') || "[]")
    passInputVal(emptyArray)
}