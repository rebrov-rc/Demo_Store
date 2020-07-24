"use strict"
class Search{
    constructor(){
        this.input = document.querySelector('.search-input')
        this.dropList = document.querySelector('.search-drop-list')
        this.btn = document.querySelector('.search-btn')
    }
    start(){
        // productBuild.init()
        this.event()
        console.log(this.btn);
    }
    event(){
        this.input.addEventListener('input', () => {
            // console.log(this.input.value);
            // console.log(prodList.list.name);
            this.dropList.innerHTML = ''
            let pop = []
            prodList.list.forEach((item, i) => {
                // console.log(item.name);
                let f = item.name.toLowerCase().indexOf(this.input.value.toLowerCase())
                if ( f != -1 ) {
                    pop.push(item.name)
                    this.dropList.innerHTML += (`<div class='hover-color'>${item.name}</div>`)
                }
                if ( this.input.value === '' ){ this.dropList.innerHTML = '' }
            });
            // console.log(pop);
        })
    }
}