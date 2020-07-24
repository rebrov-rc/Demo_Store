"use strict"
class ProdoctTools extends ProductBuild {
    constructor(){
        super(prodList)
        this.views = document.querySelectorAll('.panel-view')
        this.btnSortAlpa = document.querySelector('.btn-sort-a-to-z')
        this.btnsMoney = document.querySelectorAll('.ch-money')
        this.euro = 0.85
        this.pound = 0.8
        this.viewType = 0
        this.itemPerPage = 4
    };
    events(){
        this.views.forEach((item,i) => {
            item.addEventListener('click', () => {
                this.viewType = i
                // this.container.innerHTML = ''
                this.out()
            })
        })
        this.btnsMoney.forEach((item, i) => {
            item.addEventListener('click', () => {
                this.course = i
                this.out() 
            })
        })
        this.btnSortAlpa.addEventListener('click', () => { this.sortAlphabet() })
    };
    sortPerPage(){ 

     };
    sortAlphabet(){ 
        this.prodList.sort((a,b) => {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
            if( nameA < nameB ) return -1
            if( nameA > nameB ) return 1
            return 0
        })
        this.out()
     };
}