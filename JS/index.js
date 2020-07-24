const prodList = JSON.parse(JSON.stringify(products));

const productBuild = new ProductBuild(prodList)
productBuild.init()

const tools = new ProdoctTools()
tools.events()

const search = new Search()
search.start()