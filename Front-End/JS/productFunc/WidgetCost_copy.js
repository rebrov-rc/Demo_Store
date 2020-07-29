"use strict"
function Start(costLine)  {
    this.costLine = costLine
    this.btnsPositionL = 0
    this.btnsPositionR = 0
    // this.metricX = e.clientX
    // this.costLine = this.costLine
    this.init = (e, index) => {
        this.index = index
        let widthOfLine = this.costLine.children[0].getBoundingClientRect().width -( this.costLine.children[1].getBoundingClientRect().width * 2)
        let betweensSimbol = data.costMax - data.costMin
        // console.log(data.costMax - data.costMin);
        // console.log(widthOfLine/betweensSimbol);
        this.costLine.children[0].addEventListener('mousemove', this.moveOn, false)
        // this.xL = 0
        // this.xR = 0
        this.metricX = e.clientX

        this.xL = event.clientX - this.metricX + this.btnsPositionL
        this.xR =  Math.abs(event.clientX - this.metricX -this.btnsPositionR)
        console.log(event.clientX - this.metricX, this.btnsPositionR);
        window.addEventListener('mouseup', () =>{
            this.costLine.children[0].removeEventListener('mousemove', this.moveOn,false)
            if( this.index === 1 )this.btnsPositionL = this.xL
            if( this.index === 2 )this.btnsPositionR = this.xR
            data.input.children[0].children[0].value = Math.ceil(data.costMin + this.xL/(widthOfLine/betweensSimbol))
            data.input.children[1].children[0].value = Math.ceil(data.costMax - this.xR/(widthOfLine/betweensSimbol))
            this.prototype.events(false, 'minCost')
        })
    };
    this.moveOn = (event, rollX) => {
        if( this.index === 1 ){
            this.xL = Math.abs(event.clientX - this.metricX + this.btnsPositionL)
            this.costLine.children[1].style.left =  this.xL + 'px'
        }
        if( this.index === 2 ){
            this.xR  = Math.abs(event.clientX - this.metricX - this.btnsPositionR)
            this.costLine.children[2].style.right =  this.xR + 'px'
        }
        
    }
}
// --------------------------------------------
class WidgetCost extends FilterConstructor{
    constructor(){
        super()
        this.costLine = document.querySelector('.price-scroll')
    }
    init(){
        this.eventsWidget()
    }
    eventsWidget(e){ 
        // let r = this.costLine.children[1].children[0]
            let start = new Start(this.costLine)
            start.prototype = new WidgetCost()
            // console.log(this.costLine.children.length);
            for( let i = 1; i < this.costLine.children.length; i++ ){
                this.costLine.children[i].children[0].addEventListener('mousedown', (e) => {
                    start.init(e, i)
                },false)
            }
    }
}