"use strict"
let data = {
    prodList: JSON.parse(JSON.stringify(products)),
    input : document.querySelector('.filter-price-tools'),
    search: [],
    searchState: false,
    viewType: 0,
    course: 0,
    euro: 0.85,
    pound: 0.8,
    costMin: 1,
    costMax: 1
}
let url = 'http://localhost:3200'
fetch(url + '/persons')
.then(res => { return res.json()} )
.then(response => {
    data.prodList = response
    console.log(data.prodList);
})

// fetch(url + '/checkUser')
// .then(res => { return res.json()} )
// .then(response => {
//     data.prodList = response
//     console.log(data.prodList);
// })
const userAccess = {
    enter: new UserEnter(),
    init(){
        this.enter.init()
    }
}
userAccess.init()
// --------------------------------
const productCards = {
    productBuild : new ProductBuild(),
    tools : new ProdoctTools(),
    search : new Search(),
    filter : new FilterConstructor(),
    costWidget: new WidgetCost,
    init(){
        this.productBuild.init()
        this.tools.events()
        this.search.start()
        this.filter.filterInit()
        this.costWidget.init()
    }
}
productCards.init()
