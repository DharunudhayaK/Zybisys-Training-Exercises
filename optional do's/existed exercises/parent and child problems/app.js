let section_A = document.querySelectorAll('.section-1')
let paraLabelA = document.querySelector('.para-1')
let paraLabelB = document.querySelector('.para-2')
let paraLabelC = document.querySelector('.para-3')

let innerDivision = document.querySelectorAll('.innerDivTag')
let innerBoxA = document.querySelector('.innerBox-1')
let innerBoxB = document.querySelector('.innerBox-2')
let innerBoxC = document.querySelector('.innerBox-3')
let innerBoxD = document.querySelector('.innerBox-4')

// section_A.forEach(innerValue)

// function innerValue(input){
let arr = []

for (let out of section_A) {

    console.log(out.lastElementChild)

    console.log(out.childNodes)

    console.log(out.parentNode)

    console.log(out.firstElementChild.innerHTML)

    console.log(out.children)

    innerDivision.forEach(innerContent)

    function innerContent(input) {
        arr.push(input.innerText)
        console.log(arr[0])
        console.log(innerBoxA.nextElementSibling);
        console.log(innerBoxB.nextSibling);
        console.log(innerBoxC.previousSibling);
    }

}
console.log(paraLabelA.parentNode);
console.log(paraLabelA.nextElementSibling);