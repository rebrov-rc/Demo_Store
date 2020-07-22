"use strict"
class ProdoctTools {
    constructor(){
        this.views = document.querySelectorAll('.panel-view')
        this.btnSortAlpa = document.querySelector('.btn-sort-a-to-z')
        this.viewType = 0
        this.itemPerPage = 4
    };
    events(){
        this.views.forEach((item,i) => {
            item.addEventListener('click', () => {
                this.viewType = i
                this.container.innerHTML = ''
            // console.log(this.viewType);
                this.out()
            })
        })
        this.btnSortAlpa.addEventListener('click', () => { this.sortAlphabet() })
    };
    blockView(item, i){
        return (
            this.container.innerHTML += `
            <div class='card'>
                ${this.discount(this.prodList[i])}
                <div class='card__img-wrap'>
                    <img src=${this.prodList[i].img[0]} >
                </div>
                <div class='card-buy-btn-wrap'></div>
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
            <div class='card flx'>
                ${this.discount(this.prodList[i])}
                <div class='card__img-wrap '>
                    <img class='img-small' src=${this.prodList[i].img[0]} >
                </div>
                <div class='card-buy-btn-wrap'></div>
                <div class='card-rating-wrap f-center flx'>
                    <div class="rate-widget flx">
                        <div class="stars-wrap sw-${this.prodList[i].id} f-center flx"></div>
                        <div class="title f-center flx">(${this.voters(this.prodList[i].rating.voters)})</div>
                    </div>
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
            </div>
        `
        )
    };
    listView(item, i){
        this.container.classList.add('f-column')
        return (
            this.container.innerHTML += `
            <div class='card flx'>
                <div class='card-buy-btn-wrap'></div>
                <div class='card-rating-wrap f-center flx'>
                    <div class="rate-widget flx">
                        <div class="stars-wrap sw-${this.prodList[i].id} f-center flx"></div>
                        <div class="title f-center flx">(${this.voters(this.prodList[i].rating.voters)})</div>
                    </div>
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
            </div>
        `
        )
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
        this.container.innerHTML = ''

        this.out()
        console.log(this.prodList);
     };
}