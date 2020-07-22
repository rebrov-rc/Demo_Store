"use strict"
class Rating {
    constructor(key, wrap, items, star){
        this.key = key
        this.items = items
        this.star = star
        this.lStorage = localStorage.getItem(this.key)
        this.block = document.querySelector(`.${wrap}`)
    }
    init(){
        for ( let i = 0; i < 5; i++ ){
            this.block.innerHTML +=`<div class='st-wrap ${this.items} flex'> <i class="fa fa-star ${this.star} stars" aria-hidden="true"></i></div>`
        }        
        let stars = document.querySelectorAll('.' + this.star)
        this.stWrap = document.querySelectorAll('.' + this.items) 
        this.block.addEventListener('mouseout' , () => { this.post(stars)})
        if( this.lStorage === null ){this.lStorage = 0}
        this.storage(stars, this.lStorage)
        this.events(stars)
    };
    storage(stars, j = this.lStorage){
        for( let iII = 0;  iII < j ; iII++ ){
            stars[iII].classList.add('yellow')
        }
    };
    post(stars) { 
        stars.forEach( item => {            
            item.classList.remove('yellow')
        })
        this.storage(stars)
    };
    events(stars){
        this.stWrap.forEach((item, i) => {
            item.addEventListener('click' ,  () => { 
                this.lStorage = i + 1
                localStorage.setItem(this.key, this.lStorage)
                this.post(stars)
            })
            item.addEventListener('mouseover' , ()=>{this.storage(stars, i+1)})
        }) 
    };
}