"use strict"
class Search{
    constructor(){
        this.input = document.querySelector('.search-input')
        this.dropList = document.querySelector('.search-drop-list')
        this.btn = document.querySelector('.search-btn')
    }
    start(){
        this.event()
    }
    event(){
        this.input.addEventListener('input', () => {
            // console.log(this.input.value);
            // console.log(prodList.list.name);
            this.dropList.innerHTML = ''
            let pop = [], out = []
            prodList.list.forEach((item, i) => {
                let f = item.name.toLowerCase().indexOf(this.input.value.toLowerCase())
                if ( f != -1 ) {
                    pop.push(item.name)
                    out.push(item)
                    this.dropList.innerHTML += (`<div class='hover-color'>${item.name}</div>`)
                }
                if ( this.input.value === '' ){ this.dropList.innerHTML = '' }
            });
            productBuild.out(out)
            console.log(out);
        })
        this.btn.addEventListener('click', () => {
            console.log(789); 
        })
    }
}