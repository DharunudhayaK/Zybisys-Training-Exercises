let buttonContainer = document.querySelector('.onclickButton')
let selectContainer = document.querySelector('#colorSheet')

buttonContainer.onclick = (() => {
    console.log(selectContainer.children[2])
    selectContainer.remove(selectContainer.selectedIndex)
    let store = selectContainer.remove(selectContainer.children[1])
    console.log(store);
    console.log(selectContainer);
})