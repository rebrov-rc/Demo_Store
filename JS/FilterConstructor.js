"use strict"
class FilterConstructor extends ProductBuild{
    constructor(){
        super()
        this.inputs = document.querySelectorAll('.filter-tools label')
        this.filterBTN = document.querySelector('.filter-block-btn')
        this.filterBlocks = ['brand', 'color']
        this.items = [ data.prodList.list.brand, data.prodList.list.color ]
    }
    filterInit(){
        this.filterIn()
        // this.test()
    }
    filterIn(){
        this.inputs.forEach(item => {
            item.addEventListener('change', () => {
                this.getProdList()
                this.filterBlocks.forEach((item,i) => {
                    let filterItem = document.querySelector('.filter-' + item + '-tools')
                    this.filterOut(filterItem, i, item)
                })
            })
        })
        // this.filterBTN.addEventListener('click', () =>{
        //     this.getProdList()
        //     this.filterOut()
        // })

    }
    filterOut(filterItem, index, itemII){
        // this.inputs.forEach(item => {
        //     if( item.children[0].checked === true ){
        //         p.push(item.children[0].getAttribute('id'))
        //     }
        // })
        let p = []
        // console.log(filterItem.children.length );
        for ( let i = 0; i < filterItem.children.length; i++ ){
            if( filterItem.children[i].children[0].checked === true ){
                p.push(filterItem.children[i].children[0].getAttribute('id'))
                console.log(p);
            }
        }
        // console.log(p );

        if(p.length > 0){
            this.test(p, index, itemII)
        }
        this.out()
    };
    test(k, index, itemII){
        // let flt = ['ad', 'nk', 'tst'],
        // k = ['Adidas','Nike'], 
        // v = [],
        // j = flt.filter((item, i) => item === k[0]),
        // jII = flt.map((item,i) => {
        // })
        console.log(itemII , this.filterBlocks[0]);
        // function viktim (){
            let vII = []
            for(let i = 0; i < k.length; i++) {
                // vII[i] = flt.filter(item => item === k[i])
                // vII.push(flt.filter(item => item === k[i]))
                data.prodList.list.forEach(item => {
                    if ( itemII === this.filterBlocks[0] ){
                        if(k[i] === item.brand) vII.push(item)
                    }else if ( itemII === this.filterBlocks[1] ){
                        if(k[i] === item.color) vII.push(item)
                    }
                    // console.log(item.brand);
                })
            }
            // return vII
            data.prodList.list = vII
        // }
        // viktim()

        // console.log(viktim());
    }
}
