let formContent = document.querySelector('.formLabel')
let button = document.querySelector('.button')
let err = document.querySelectorAll('.showMsg')
let signInbtn = document.querySelector('.signLabel')
let l = document.querySelector('.acc')
let rootNode = document.querySelector('.outerDiv')
let loginPage = document.querySelector('.formLogin')
let loginButton = document.querySelector('.btn')

let emptyArray, storeObject = [], capture = loginPage.children, store = formContent.children
signInbtn.addEventListener('click', function () {
    rootNode.childNodes[1].classList.add('errorMsg')
    rootNode.childNodes[3].classList.remove('secondDiv')
})

l.addEventListener('click', function () {
    rootNode.childNodes[3].classList.add('secondDiv')
    rootNode.childNodes[1].classList.remove('errorMsg')
})

let object = { inputA: store[4], errA: store[2], inputB: store[10], errB: store[5], inputC: store[13], errC: store[8], inputD: store[7] }
let obj2 = { logName: capture[1], err1: capture[2], logPassword: capture[4], err2: capture[5] }
let isNameValid = { isname: false }, isPasswordValid = { ispassword: false }, isConformPasswordValid = { isConfrmPass: false }, isEmailValid = { isemail: false }, isLogUnValid = { isunValid: false }, isLogPasswordValid = { isP: false }

object['inputA'].oninput = (() => {
    let inputElementA = object['inputA'].value, useNameRegex = /^[a-zA-Z]+$/;
    (inputElementA.trim() && useNameRegex.test(inputElementA)) ? isNameValid['isname'] = true : isNameValid['isname'] = false;
    if (isNameValid['isname'] === false) {
        err[1].classList.remove('errorMsg')
        err[1].innerHTML = "enter valid username"
    }
    else {
        err[1].classList.add('errorMsg')
        err[1].innerHTML = ""
        triggerEmail()
    }
})

function triggerEmail() {
    object['inputD'].oninput = (() => {
        let inputElementD = object['inputD'].value, emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, e = inputElementD.toLowerCase();
        (e.trim() && emailRegex.test(e)) ? isEmailValid['isemail'] = true : isEmailValid['isemail'] = false;
        if (isEmailValid['isemail'] === false) {
            err[2].classList.remove('errorMsg')
            err[2].innerHTML = "enter valid email"
        }
        else {
            err[2].classList.add('errorMsg')
            err[2].innerHTML = ""
            inputBCall()
        }
    })
}

function inputBCall() {
    object['inputB'].oninput = (function () {
        let passwordRgex = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;
        (object['inputB'].value.trim() && passwordRgex.test(object['inputB'].value)) ? isPasswordValid['ispassword'] = true : isPasswordValid['ispassword'] = false
        if (isPasswordValid['ispassword'] === false) {
            err[3].classList.remove('errorMsg')
            err[3].innerHTML = "enter valid password"
        }
        else {
            err[3].classList.add('errorMsg')
            err[3].innerHTML = ""
            cPassFunc()
        }
    })
}

function cPassFunc() {
    object['inputC'].oninput = (function () {
        let capture = object['inputC'].value, passwordRgex = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;
        (capture.trim() && passwordRgex.test(capture) && object['inputB'].value.match(capture)) ? isConformPasswordValid['isConfrmPass'] = true : isConformPasswordValid['isConfrmPass'] = false;
        if (isConformPasswordValid['isConfrmPass'] === false) {
            err[4].classList.remove('errorMsg')
            err[4].innerHTML = "password does not match"
        }
        else {
            err[4].classList.add('errorMsg')
            err[4].innerHTML = ""
        }
    })
}

obj2['logName'].oninput = (() => {
    let logname = obj2['logName'].value;
    emptyArray = JSON.parse(localStorage.getItem("storeValue"))
    let mod = emptyArray[0][0]['username'];
    (mod.includes(logname)) ? isLogUnValid['isunValid'] = true : isLogUnValid['isvalid'] = false;
    if (isLogUnValid['isunValid'] === false) {
        obj2['err1'].classList.remove('errorMsg')
        obj2['err1'].innerHTML = "not matching"
    }
    else if (logname.length === mod.length) {
        obj2['err1'].classList.add('errorMsg')
        obj2['err1'].innerHTML = ""
    }
})

obj2['logPassword'].oninput = (() => {
    let logname = obj2['logPassword'].value;
    emptyArray = JSON.parse(localStorage.getItem("storeValue"))
    let mod = emptyArray[0][0]['password'];
    (mod.includes(logname)) ? isLogPasswordValid['isP'] = true : isLogPasswordValid['isP'] = false;
    if (isLogPasswordValid['isP'] === false) {
        obj2['err2'].classList.remove('errorMsg')
        obj2['err2'].innerHTML = "not matching"
    }
    else {
        obj2['err2'].classList.add('errorMsg')
        obj2['err2'].innerHTML = ""
    }
})

loginButton.onclick = function () {
    (isLogUnValid['isunValid'] === true && isLogPasswordValid['isP'] === true) ? alert("existed user") : alert("unable to find the account sign it in")
}

button.onclick = (function () {
    if (isNameValid['isname'] === false || isPasswordValid['ispassword'] === false || isConformPasswordValid['isConfrmPass'] === false || isEmailValid['isemail'] === false) {
        for (let out in err) {
            err[out].innerText = "required field or not match";
        }
    }
    else if ((isNameValid['isname'] === true || isPasswordValid['ispassword'] === true) || isConformPasswordValid['isConfrmPass'] === true || isEmailValid['isemail'] === true) {
        function pass(i, j, v) {
            let s = {
                username: i,
                password: j,
                email: v
            }
            storeObject.push(s)
        }
        pass(object['inputA'].value, object['inputB'].value, object['inputD'].value)
        localStorage.setItem('storeValue', JSON.stringify([...JSON.parse(localStorage.getItem("storeValue") || "[]"), storeObject]))
    }
})