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
        this.container.innerHTML = ''

        this.prodList.forEach((item, i) => {
            if ( this.viewType === 0 ){ 
                this.container.classList.remove('f-column')
                this.blockView(item, i)}else
            if ( this.viewType === 1 ){ this.tableView(item, i) }else
            if ( this.viewType === 2 ){ this.listView(item, i) }

        });
        this.rating(this.prodList)
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
