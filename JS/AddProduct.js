"use strict"
class AddProduct {
    constructor(a, added){
        this.prodItems = document.querySelectorAll('.add-product-to-cart')
        this.cartConteiner = document.querySelector('.my-cart')
        this.counter = 0
        // this.added = added
    }
    init(){
        this.events()
        this.adding()
    };
    events(){
        this.prodItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                let getId = item.getAttribute('id')
                this.adding(getId)
                localStorage.setItem('addedProduct', JSON.stringify(productBuild.added))
            }) 
        })
    };
    adding(getId){
        if ( productBuild.added.indexOf(getId) === -1 && getId != undefined){
            productBuild.added.push(getId)
            document.getElementById(getId).innerHTML = (`
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            `)
            console.log();
        }else if(getId != undefined){
            productBuild.added.splice(productBuild.added.indexOf(getId), 1)
            document.getElementById(getId).innerHTML = (`
                <i class="fa fa-plus" aria-hidden="true"></i>
            `)
        }
        if (productBuild.added.length === 0){
            this.cart('#bac1c3','cart is empty' )
        }else{
            this.cart('#f58923', `${productBuild.added.length} items`)

        }
        console.log(productBuild.added);
        productBuild.added.forEach(item => { 
            document.getElementById(item).innerHTML = (`
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            `)
        })  
    };
    cart(bgc, text){
        this.cartConteiner.children[0].style.background = bgc
        this.cartConteiner.children[1].children[1].innerHTML = text
    }
}