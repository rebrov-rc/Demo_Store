let data = {
    prodList: JSON.parse(JSON.stringify(products)),
    search: [],
    searchState: false,
    viewType: 0,
    course: 0,
    euro: 0.85,
    pound: 0.8
}
const productCards = {
    productBuild : new ProductBuild(),
    tools : new ProdoctTools(),
    search : new Search(),
    filter : new FilterConstructor(),
    init(){
        this.productBuild.init()
        this.tools.events()
        this.search.start()
        this.filter.filterInit()
    }
}
productCards.init()
