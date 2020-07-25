"use strict"
class Rating {
    constructor(key, wrap, items, star, voteCount){
        this.key = key
        this.items = items
        this.star = star
        this.lStorage = localStorage.getItem(this.key)
        this.block = document.querySelector(`.${wrap}`)
        this.voteCount = document.querySelectorAll(`.${voteCount}`)
    }
    init(i){
        for ( let i = 0; i < 5; i++ ){
            this.block.innerHTML +=`<div class='st-wrap ${this.items} flex'> <i class="fa fa-star ${this.star} stars" aria-hidden="true"></i></div>`
        }        
        let stars = document.querySelectorAll('.' + this.star)
        this.stWrap = document.querySelectorAll('.' + this.items) 
        this.rateCounter(stars,i)
        // this.block.addEventListener('mouseout' , () => { this.post(stars)})
        // if( this.lStorage === null ){this.lStorage = 0}
        // this.storage(stars, this.lStorage)
        // this.events(stars)
        this.voteCount.forEach((item,i) => {
            item.innerHTML = `(${this.voters(data.prodList.list[i].rating.votes.length)})`

        })

    };
    storage(stars, j = this.lStorage){           // Выключен 
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
    rateCounter(stars,iIII) {
            let res = +data.prodList.list[iIII].rating.votes[0]
            for( let i = 1; i < +data.prodList.list[iIII].rating.votes.length; i++ ){
                res += +data.prodList.list[iIII].rating.votes[i]
            }
            res = Math.floor(res/+data.prodList.list[iIII].rating.votes.length)
            for( let iII = 0;  iII < res ; iII++ ){
                stars[iII].classList.add('yellow')
            }
    }
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
    voters(voters){
        if( voters > 0 ){
            return voters
        }else {return 0}
    };
}