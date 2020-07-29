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
        // this.costLine.children[1].children[0].addEventListener('mousedown', (e) => {
        //     let st = new start(e,this.costLine, data.input,this.stop)
        //     console.log(st);

        //     // st.__proto__ = new FilterConstructor(e,this.costLine, data.input,this.stop)
        //     console.log(st);
        //     st.start(e,this.costLine, data.input,this.stop)
        // },false)
        let start = function(e,costLineEl, input, stop){//---------------------
            this.init = () => {
                console.log(this);

                let widthOfLine = costLineEl.children[0].getBoundingClientRect().width -( costLineEl.children[1].getBoundingClientRect().width * 2)
                let betweensSimbol = data.costMax - data.costMin
                // console.log(data.costMax - data.costMin);
                // console.log(widthOfLine/betweensSimbol);
                console.log(e.target.classList[0]);
                let metricX = e.clientX
                let costLine = costLineEl
                costLineEl.children[0].addEventListener('mousemove', moveOn, false)
                let x = 0
                x = event.clientX - metricX + btnsPosition

                this.moveOn = (event, rollX) => {
                    x = event.clientX - metricX + btnsPosition

                    costLine.children[1].style.left =  x + 'px'
                }
                // moveOn(event, this.costLine)
                window.addEventListener('mouseup', () =>{
                    costLineEl.children[0].removeEventListener('mousemove', this.moveOn,false)
                    btnsPosition = x
                    input.children[0].children[0].value = Math.ceil(data.costMin + x/(widthOfLine/betweensSimbol))
                    // events(false, 'minCost')
                    stop()
                })
            }//-----------------------------
            this.costLine.children[1].children[0].addEventListener('mousedown', (e) => {
                // let st = new start(e,this.costLine, data.input,this.stop)
                // st.propotype = new FilterConstructor(e,this.costLine, data.input,this.stop)
                // console.log(444444444444444444);
                st.init()
            },false)
        }
        let st = new start(e,this.costLine, data.input,this.stop)
        st.propotype = new FilterConstructor(e,this.costLine, data.input,this.stop)
        st.init()

    };
    stop(){
        // console.log(this.costLine);
    }
}
function nnn () {
    console.log(1111111111);

    this.init = function () {
        console.log(8888888888);
    }
}
let pol = new nnn()
pol.init()