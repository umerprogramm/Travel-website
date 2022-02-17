let y = document.getElementById('nav')
let menu = document.getElementById('menu')
let btn = document.getElementById('btn')

const Toggle = ()=>{

        y.style.display = "none"
        btn.style.display = "none"
}

menu.addEventListener('click',()=>{
    y.style.display = "block"
    btn.style.display = "block"
})


