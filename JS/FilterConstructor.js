"use strict"
class FilterConstructor extends ProductBuild{
    constructor(){
        super()
        this.inputs = document.querySelectorAll('.filter-tools label')
        this.filterBTN = document.querySelector('.filter-block-btn')
    }
    filterInit(){
        this.filterOut()
    }
    filterOut(){
        // this.inputs.forEach(item => {
        //     item.addEventListener('mouseup', () => {this.filterInner(item)})
        // })
        this.filterBTN.addEventListener('click', () =>{this.filterInner()})
    }
    filterInner(){
        let p = []
        this.inputs.forEach(item => {
            if( item.children[0].checked === true ){
                p.push(item.children[0].getAttribute('id'))
            }
        })
        console.log(p);
        console.log(data.prodList.list);
    }
}