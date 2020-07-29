"use strict"
class WidgetCost extends FilterConstructor{
    constructor(){
        super()
        this.costLine = document.querySelector('.price-scroll')
    }
    init(){
        this.eventsWidget()
    }
    eventsWidget(e){ 
        let btnsPosition = 0
        let r = this.costLine.children[1].children[0]
        this.costLine.children[1].children[0].addEventListener('mousedown', (e) => {


            let widthOfLine = this.costLine.children[0].getBoundingClientRect().width -( this.costLine.children[1].getBoundingClientRect().width * 2)
            let betweensSimbol = data.costMax - data.costMin
            // console.log(data.costMax - data.costMin);
            // console.log(widthOfLine/betweensSimbol);
            console.log(e.target.classList[0]);
            let metricX = e.clientX
            let costLine = this.costLine
            this.costLine.children[0].addEventListener('mousemove', moveOn, false)
            let x = 0
            x = event.clientX - metricX + btnsPosition

            function moveOn(event, rollX) {
                x = event.clientX - metricX + btnsPosition

                costLine.children[1].style.left =  x + 'px'
            }
            // moveOn(event, this.costLine)
            window.addEventListener('mouseup', () =>{
                this.costLine.children[0].removeEventListener('mousemove', moveOn,false)
                btnsPosition = x
                this.input.children[0].children[0].value = Math.ceil(data.costMin + x/(widthOfLine/betweensSimbol))
                this.events(false, 'minCost')
            })
        },false)
    }
}