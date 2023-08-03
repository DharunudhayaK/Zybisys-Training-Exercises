let div = document.querySelector('.divContainer')

let selectLabel = document.createElement('select')
div.appendChild(selectLabel)

let url = "https://pokeapi.co/api/v2/pokemon/ditto"
function passMyfunc(url) {
    fetch(url)
        .then(response => response.json())
        .then((response) => {
            let obj1 = response['abilities']
            obj1.map((val) => {
                let opt = document.createElement('option')
                selectLabel.appendChild(opt)
                opt.innerHTML = val['ability']['name']
            })
            let obj2 = response['forms']
            obj2.map((val) => {
                let opt = document.createElement('option')
                selectLabel.appendChild(opt)
                opt.innerHTML = val['name']
            })
            let obj3 = response['game_indices']
            obj3.map((val) => {
                let opt = document.createElement('option')
                selectLabel.appendChild(opt)
                opt.innerHTML = val['version']['name']
            })
            let obj4 = response['held_items']
            obj4.map((val) => {
                let opt = document.createElement('option')
                selectLabel.appendChild(opt)
                opt.innerHTML = val['item']['name']
            })
            let opt = document.createElement('option')
            selectLabel.appendChild(opt)
            opt.innerHTML = response['species']['name']
            let obj5 = response['stats']
            obj5.map((val) => {
                let opt = document.createElement('option')
                selectLabel.appendChild(opt)
                opt.innerHTML = val['stat']['name']
            })
            let opt2 = document.createElement('option')
            selectLabel.appendChild(opt2)

            opt2.innerHTML = response['types'][0].type['name']
            console.log(response);
        })
}
passMyfunc(url)