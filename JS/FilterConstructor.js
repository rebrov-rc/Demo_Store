class FilterConstructor extends ProductBuild{
    constructor(){
        super()
        this.inputs = document.querySelectorAll('.filter-tools label')
    }
    filterInit(){
        this.filterOut()
    }
    filterOut(){
        this.inputs.forEach(item => {
            item.addEventListener('mouseup', () => {this.filterInner(item)})
        })
    }
    filterInner(item){
        let ppp = item.children[0].checked
        if ( ppp === true ){
            console.log(item);
        }
        // console.log(this.inputs[0].children[0].checked);

    }
}