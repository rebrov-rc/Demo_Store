"use strict"
class FilterConstructor extends ProductBuild{
    constructor(){
        super()
        this.inputs = document.querySelectorAll('.filter-tools label')
        this.filterBTN = document.querySelector('.filter-block-btn')
        this.input = document.querySelector('.filter-price-tools')
        this.filterBlocks = ['brand', 'color','price', 'size']
        this.items = [ data.prodList.list.brand, data.prodList.list.cost,
        data.prodList.list.color, data.prodList.list.size ]
        this.min = 1
        this.max = 1

    }
    filterInit(){
        this.minMax()
        this.filterIn()
        // this.test()
    }
    minMax(){
        let costLength = []
        // input = document.querySelector('.filter-price-tools')
        data.prodList.list.forEach(item => {
            // console.log(item.cost.new);
            costLength.push(+item.cost.new)
        })
        console.log(costLength);
        console.log(Math.min.apply(null, costLength));
        console.log(Math.max.apply(null, costLength));
        this.min = Math.min.apply(null, costLength)
        this.max = Math.max.apply(null, costLength)
        this.input.children[0].children[0].value = this.min
        this.input.children[1].children[0].value = this.max
    }
    filterIn(){
        this.inputs.forEach((item, i) => {
            // console.log(this.inputs[i].children[0]);
            if ( this.inputs[i].children[0].type === 'number' ){
                this.inputs[i].children[0].addEventListener('input', (e)=>{
                    let minMaxValue = false
                    this.events(minMaxValue,e);
                })
            }
            item.addEventListener('change', (e) => {
                let minMaxValue = false
                if ( e.target.type === 'number' ){ minMaxValue = false }
                this.events(minMaxValue, e)
                // console.log('It`s Ok!');
                // this.getProdList()
                // this.filterBlocks.forEach((item,i) => {
                //     let filterItem = document.querySelector('.filter-' + item + '-tools')
                //     this.filterOut(filterItem, i, item)
                // })
            })
        })
    };
    events(minMaxValue, e){
        // console.log(this.input.children[0].children[0].value + '=' + this.input.children[1].children[0].value);
        let inputMinValue = +this.input.children[0].children[0].value,
        inputMaxValue = +this.input.children[1].children[0].value
        // console.log(inputMinValue , inputMaxValue);
        
        this.getProdList()
        this.filterBlocks.forEach((item,i) => {
            let filterItem = document.querySelector('.filter-' + item + '-tools')
            this.filterOut(filterItem, i, item, inputMinValue,inputMaxValue)
        })
        if( minMaxValue === true )this.minMax()
        if ( inputMinValue > inputMaxValue){
            if(e.target.name === 'minCost'){
                this.input.children[0].children[0].value = inputMaxValue
            }else {
                this.input.children[1].children[0].value = inputMinValue
            }
            // this.input.children[1].children[0].value = inputMinValue
        }
        // if ( inputMaxValue < inputMinValue ){inputMaxValue =  2; console.log(2);}//inputMinValue
    } 
    filterOut(filterItem, index, itemII, inputMinValue,inputMaxValue){
        let p = []
        // console.log(itemII );
        // console.log(filterItem.children[0].children[0].value );
        for ( let i = 0; i < filterItem.children.length; i++ ){
            if ( itemII === 'price' ){ 
                // p.push(filterItem.children[i].children[0].value)
                p = [1]
                // console.log(p.length);
             }else{
                if( filterItem.children[i].children[0].checked === true ){
                    p.push(filterItem.children[i].children[0].getAttribute('id'))
                    // console.log(p);
                }
             }
        }
        // console.log(p );

        if(p.length > 0){
            this.test(p, index, itemII, inputMinValue,inputMaxValue)
        }
        this.out()

    };
    test(k, index, itemII, inputMinValue,inputMaxValue){

        // console.log(itemII , this.filterBlocks[0]);
            let vII = []
            for(let i = 0; i < k.length; i++) {
                data.prodList.list.forEach(item => {
                    if ( itemII === this.filterBlocks[0] ){
                        if(k[i] === item.brand) {vII.push(item)}
                    }else if ( itemII === this.filterBlocks[1] ){
                        if(k[i] === item.color) {vII.push(item)}
                    }else if ( itemII === this.filterBlocks[2] ){
                        if(inputMinValue <= item.cost.new && item.cost.new <= inputMaxValue){
                             vII.push(item)
                            }
                    }else if ( itemII === this.filterBlocks[3] ){
                        if(k[i] === item.size) vII.push(item)
                    }
                })
            }
            // return vII
            data.prodList.list = vII

    }
}
/**
 * out in inputs min & max values
 */