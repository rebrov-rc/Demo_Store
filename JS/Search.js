"use strict"
class Search extends ProductBuild{
    constructor(){
        super()
        this.input = document.querySelector('.search-input')
        this.dropList = document.querySelector('.search-drop-list')
        this.btn = document.querySelector('.search-btn')
    }
    start(){
        this.event()
    }
    event(){
        this.input.addEventListener('input', () => {
            this.getProdList() // ????????????????
            // console.log(this.input.value);
            // console.log(prodList.name);
            this.dropList.innerHTML = ''
            // let pop = []
            // data.searchState = true // ???????????
            // this.search = []
            data.search = []
            data.prodList.list.forEach((item, i) => {
                let f = item.name.toLowerCase().indexOf(this.input.value.toLowerCase())
                if ( this.input.value === '' ){ 
                    this.dropList.innerHTML = ''
                    data.searchState = false
                    // this.search = undefined
                    // this.getProdList()
                    data.search = data.prodList.list
                 }else
                if ( f != -1 ) {
                    // pop.push(item.name)
                    // out.push(item)
                    data.searchState = true // ????????????

                    // this.search.push(item)
                    data.search.push(item)
                    // console.log(item);
                    // console.log(data.search);
                    this.dropList.innerHTML += (`<div class='hover-color'>${item.name}</div>`)
                }

            });
            // console.log(data.search);

            this.out()
            // console.log(out);
        })
        this.btn.addEventListener('click', () => {
            console.log(789); 
        })
    }
}