"use strict"
let data = {
    prodList: JSON.parse(JSON.stringify(products)),
    search: [],
    searchState: false,
    viewType: 0,
    course: 0,
    euro: 0.85,
    pound: 0.8,
    costMin: 1,
    costMax: 1
}
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
