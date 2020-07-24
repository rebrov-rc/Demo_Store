"use strict"
class ProductBuild  { 
    constructor(prodList){
        this.course = 0
        this.viewType = 0
        this.added = []
        this.prodList = prodList.list
        this.container = document.querySelector('.product-cards-wrap')
    };
    init(){
        if( localStorage.getItem('addedProduct') ){
            this.added = JSON.parse(localStorage.getItem('addedProduct'))
        }
        this.out()
        // this.events()
    };
    out(search){
        console.log(this.prodList);
        this.container.innerHTML = ''
        if ( search != undefined ){
            this.prodList = search
        }
        this.prodList.forEach((item, i) => {
            if ( this.viewType === 0 ){ 
                this.container.classList.remove('f-column')
                this.blockView(item, i)}else
            if ( this.viewType === 1 ){ this.tableView(item, i) }else
            if ( this.viewType === 2 ){ this.listView(item, i) }

        });
        this.rating(this.prodList)
        const addProductToCart = new AddProduct()
        addProductToCart.init()
    };
    blockView(item, i){
        return (
            this.container.innerHTML += `
            <div class='card top-list'>
                ${this.discount(this.prodList[i])}
                <div class='card__img-wrap'>
                    <img src=${this.prodList[i].img[0]} >
                </div>
                <div class='card-buy-btn-wrap'>
                    <div class='add-product-to-cart abs-plus abs flx f-center' id='${this.prodList[i].id}'>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
                <div class='card-rating-wrap'>
                    <div class="rate-widget flx">
                        <div class="stars-wrap sw-${this.prodList[i].id} f-center flx"></div>
                        <div class="title f-center flx">(${this.voters(this.prodList[i].rating.voters)})</div>
                </div>
                </div>
                <div class='card-brand'>${this.prodList[i].brand}</div>
                <div class='card-product-name_and_cost-wrap flx f-between'>
                    <div class='card-prod-name'>${this.prodList[i].name}</div>
                    <div class='card-prod-cost flx'>${this.oldCost(this.prodList[i].cost)}</div>
                </div>
                <div class='card-prod-characteristics-wrap flx'>
                    <div class='card-color'>Color: ${this.prodList[i].color} </div>
                    <div class='card-size'> Size: ${this.prodList[i].size} </div>
                </div>
            </div>
        `
        )
    };
    tableView(item, i){
        this.container.classList.add('f-column')
        return (
            this.container.innerHTML += `
            <div class='card flx f-between top-list'>
                ${this.discount(this.prodList[i])}
                <div class='card__img-wrap '>
                    <img class='img-small' src=${this.prodList[i].img[0]} >
                </div>
                <div class='card-brand f-center flx'>${this.prodList[i].brand}</div>
                <div class='card-product-name_and_cost-wrap  f-center flx'>
                    <div class='card-prod-name'>${this.prodList[i].name}</div>
                    <div class='card-prod-cost flx'>${this.oldCost(this.prodList[i].cost)}</div>
                </div>
                <div class='card-prod-characteristics-wrap f-center flx'>
                    <div class='card-color'>Color: ${this.prodList[i].color} </div>
                    <div class='card-size'> Size: ${this.prodList[i].size} </div>
                </div>
                <div class='card-rating-wrap f-center flx'>
                    <div class="rate-widget flx">
                        <div class="stars-wrap sw-${this.prodList[i].id} f-center flx"></div>
                        <div class="title f-center flx">(${this.voters(this.prodList[i].rating.voters)})</div>
                    </div>
                </div>
                <div class='card-buy-btn-wrap flx f-center'>
                    <div class='add-product-to-cart relative flx f-center' id='${this.prodList[i].id}'>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        `
        )
    };
    listView(item, i){
        this.container.classList.add('f-column')
        return (
            this.container.innerHTML += `
                <div class='card flx f-between top-list'>
                    <div class='card-brand f-center flx'>${this.prodList[i].brand}</div>
                    <div class='card-product-name_and_cost-wrap  f-center flx'>
                        <div class='card-prod-name'>${this.prodList[i].name}</div>
                        <div class='card-prod-cost flx'>${this.oldCost(this.prodList[i].cost)}</div>
                    </div>
                    <div class='card-prod-characteristics-wrap f-center flx'>
                        <div class='card-color'>Color: ${this.prodList[i].color} </div>
                        <div class='card-size'> Size: ${this.prodList[i].size} </div>
                    </div>
                    <div class='card-rating-wrap f-center flx'>
                        <div class="rate-widget flx">
                            <div class="stars-wrap sw-${this.prodList[i].id} f-center flx"></div>
                            <div class="title f-center flx">(${this.voters(this.prodList[i].rating.voters)})</div>
                        </div>
                    </div>
                    <div class='card-buy-btn-wrap'>
                        <div class='add-product-to-cart  flx f-center' id='${this.prodList[i].id}'>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            `
            )
    };
    oldCost(cost){
        let convert, simbol
        if ( this.course === 0 ){ convert = 1 ; simbol = ' &#36;'}
        if ( this.course === 1 ) {convert = this.euro ; simbol = ' &euro;'}
        if ( this.course === 2 ) {convert = this.pound ; simbol = '	&pound;'} 
        if (cost.old === '' || cost.old === undefined){
            return (`<div class='new-cost'>${Math.floor(cost.new * convert) + simbol}</div>`)
        }else if (cost.old != '') {
            return (`<div class='old-cost'>${Math.floor(cost.old * convert) + simbol} </div>  <div class='new-cost'>${Math.floor(cost.new * convert) + simbol}</div>`)
        }
    };
    discount(props){
        if ( props.discount != null ) {
            return (`<div class='card-discount f-center flx abs'>${props.discount}%</div>`)
        }else{ return '' }
    };
    rating(props){
        for(let i = 0; i < props.length; i++ ){
            this.prodList[i].rating.object = new Rating('lock'+props[i].id, 'sw-'+props[i].id, 'wr-'+props[i].id, 'stars-'+props[i].id)
            this.prodList[i].rating.object.init()
        }
    };
    voters(voters){
        if( voters > 0 ){
            return voters
        }else {return 0}
    };

}
