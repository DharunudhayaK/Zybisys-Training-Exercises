let referButton = document.querySelector('.headButton')
let sectionB = document.querySelector('.section')
let addButton = document.querySelector('.saveButton')
let formConatiner = document.querySelectorAll('.formLabel')
let sectionBPart = document.querySelector('.sectionB')
let popupBackground = document.querySelector('.popupBg')
let popupOpen = document.querySelector('.popupClick')
let editPopup = document.querySelector('.editLabel')
let createUpdate = document.querySelector('.updatedValue')

sectionB.classList.add('hidden')
referButton.onclick = (() => {
    sectionB.classList.remove('hidden')
})

popupOpen.onclick = (() => {
    popupBackground.style.display = "block"
    sectionBPart.style.display = "block"
})

let arr = []
let count = 0
addButton.onclick = ((event) => {
    alert(`item has been added to the cart`)
    event.preventDefault()
    let secondChild
    let fourthChild
    function passInput(input) {
        for (let out of input) {
            let firstChildren = out.firstElementChild
            secondChild = firstChildren.nextElementSibling.value

            let lastButton = out.lastElementChild
            fourthChild = lastButton.previousElementSibling.value
        }
    }
    passInput(formConatiner)

    function obj(secondChild, fourthChild) {
        store = {
            secondChild,
            fourthChild,
        }
        arr.push(secondChild, fourthChild)
    }
    obj(secondChild, fourthChild)
    function popUpBox(arr) {
        let divInPopup = document.createElement('div')
        divInPopup.setAttribute('class', 'popupDiv')
        sectionBPart.appendChild(divInPopup)

        let titleLabel = document.createElement('p')
        titleLabel.setAttribute('class', 'popupTitle')
        titleLabel.innerHTML = arr[count]
        divInPopup.appendChild(titleLabel)
        count++

        let contentLabel = document.createElement('p')
        contentLabel.setAttribute('class', 'popupTitle')
        contentLabel.innerHTML = arr[count]
        divInPopup.appendChild(contentLabel)
        count++

        let editButton = document.createElement('button')
        editButton.innerHTML = "edit"
        editButton.setAttribute('class', 'editBtn')
        divInPopup.appendChild(editButton)

        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = "delete"
        deleteButton.setAttribute('class', 'editBtn')
        divInPopup.appendChild(deleteButton)

        deleteButton.onclick = (() => {
            alert(`Are you sure about this`)
            let formConatiner = document.querySelector('.formLabel')

            function passVal(formConatiner, divInPopup) {
                formConatiner.reset()
                divInPopup.innerHTML = " "
                sectionBPart.style.display = "none"
                popupBackground.style.display = "none"
            }
            passVal(formConatiner, divInPopup)
        })

        editButton.onclick = (() => {
            popupBackground.style.display = "block"
            editPopup.style.display = "block"
            sectionBPart.style.display = "none"

            let insideDiv = document.createElement('div')
            insideDiv.setAttribute('class', 'insideEditOption')
            editPopup.appendChild(insideDiv)

            let textNodeA = document.createTextNode("Title")
            insideDiv.appendChild(textNodeA)

            let input_1 = document.createElement('input')
            input_1.setAttribute('type', 'text')
            input_1.setAttribute('value', `${secondChild}`)
            insideDiv.appendChild(input_1)

            let textNodeB = document.createTextNode("Description")
            insideDiv.appendChild(textNodeB)

            let input_2 = document.createElement('textarea')
            input_2.setAttribute('class', 'insideDescBox')
            input_2.value = `${fourthChild}`
            insideDiv.appendChild(input_2)

            let updateButton = document.createElement('button')
            updateButton.innerHTML = "update"
            updateButton.setAttribute('class', 'editBtn')
            insideDiv.appendChild(updateButton)
n
            updateButton.addEventListener('click', () => {
                let titleCapture = insideDiv.children[0].value
                let contentCapture = insideDiv.children[1].value

                let createInnerDiv = document.createElement('div')
                createInnerDiv.setAttribute('class', 'innerDivTag')
                createUpdate.appendChild(createInnerDiv)

                localStorage.setItem('titleCapture', JSON.stringify([...JSON.parse(localStorage.getItem("titleCapture") || "[]"), titleCapture]))
                let getValue = JSON.parse(localStorage.getItem('titleCapture'))
                passValue(getValue)

                function passValue(getValue) {
                    getValue.map((value) => {
                        console.log(value);
                        let createTitleVal = document.createElement('p')
                        createTitleVal.innerText = value
                        createInnerDiv.appendChild(createTitleVal)
                    })
                }

                localStorage.setItem('contentCapture', JSON.stringify([...JSON.parse(localStorage.getItem("contentCapture") || "[]"), contentCapture]))
                let getValue_2 = JSON.parse(localStorage.getItem('contentCapture'))
                another(getValue_2)

                function another(getValue) {
                    getValue.map((value) => {
                        console.log(value);
                        let createContentVal = document.createElement('p')
                        createContentVal.innerHTML = contentCapture
                        createInnerDiv.appendChild(createContentVal)
                    })
                }
            })
        })
    }
    popUpBox(arr)
})
popupBackground.onclick = (() => {
    popupBackground.style.display = "none"
    sectionBPart.style.display = "none"
    editPopup.style.display = "none"
})