"use strict"
class ProductBuild extends ProdoctTools{
    constructor(prodList){
        super()
        this.prodList = prodList.list
        this.container = document.querySelector('.product-cards-wrap')
    };
    init(){
        this.out()
        this.events()
    };
    out(){
        this.prodList.forEach((item, i) => {
            if ( this.viewType === 0 ){ 
                this.container.classList.remove('f-column')
                this.blockView(item, i) 
            }else
            if ( this.viewType === 1 ){ this.tableView(item, i) }else
            if ( this.viewType === 2 ){ this.listView(item, i) }

        });
        this.rating(this.prodList)
    };
    oldCost(cost){
        if (cost.old === '' || cost.old === undefined){
            return (`<div class='new-cost'>${cost.new}$</div>`)
        }else if (cost.old != '') {
            return (`<div class='old-cost'>${cost.old}$ </div>  <div class='new-cost'>${cost.new}$</div>`)
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

    // blockView(item, i){
    //     return (
    //         this.container.innerHTML += `
    //         <div class='card'>
    //             ${this.discount(this.prodList[i])}
    //             <div class='card__img-wrap'>
    //                 <img src=${this.prodList[i].img[0]} >
    //             </div>
    //             <div class='card-buy-btn-wrap'></div>
    //             <div class='card-rating-wrap'>
    //                 <div class="rate-widget flx">
    //                     <div class="stars-wrap sw-${this.prodList[i].id} f-center flx"></div>
    //                     <div class="title f-center flx">(${this.voters(this.prodList[i].rating.voters)})</div>
    //             </div>
    //             </div>
    //             <div class='card-brand'>${this.prodList[i].brand}</div>
    //             <div class='card-product-name_and_cost-wrap flx f-between'>
    //                 <div class='card-prod-name'>${this.prodList[i].name}</div>
    //                 <div class='card-prod-cost flx'>${this.oldCost(this.prodList[i].cost)}</div>
    //             </div>
    //             <div class='card-prod-characteristics-wrap flx'>
    //                 <div class='card-color'>Color: ${this.prodList[i].color} </div>
    //                 <div class='card-size'> Size: ${this.prodList[i].size} </div>
    //             </div>
    //         </div>
    //     `
    //     )
    // };
    // tableView(item, i){
    //     this.container.classList.add('f-column')
    //     return (
    //         this.container.innerHTML += `
    //         <div class='card flx'>
    //             ${this.discount(this.prodList[i])}
    //             <div class='card__img-wrap '>
    //                 <img class='img-small' src=${this.prodList[i].img[0]} >
    //             </div>
    //             <div class='card-buy-btn-wrap'></div>
    //             <div class='card-rating-wrap f-center flx'>
    //                 <div class="rate-widget flx">
    //                     <div class="stars-wrap sw-${this.prodList[i].id} f-center flx"></div>
    //                     <div class="title f-center flx">(${this.voters(this.prodList[i].rating.voters)})</div>
    //                 </div>
    //             </div>
    //             <div class='card-brand f-center flx'>${this.prodList[i].brand}</div>
    //             <div class='card-product-name_and_cost-wrap  f-center flx'>
    //                 <div class='card-prod-name'>${this.prodList[i].name}</div>
    //                 <div class='card-prod-cost flx'>${this.oldCost(this.prodList[i].cost)}</div>
    //             </div>
    //             <div class='card-prod-characteristics-wrap f-center flx'>
    //                 <div class='card-color'>Color: ${this.prodList[i].color} </div>
    //                 <div class='card-size'> Size: ${this.prodList[i].size} </div>
    //             </div>
    //         </div>
    //     `
    //     )
    // }
