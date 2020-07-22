const prodList = JSON.parse(JSON.stringify(products));
const productTools = new ProductBuild(prodList)
productTools.init()