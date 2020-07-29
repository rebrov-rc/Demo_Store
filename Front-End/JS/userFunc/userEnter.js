/**
 * Модуль пока не рабочий 
 */
class UserEnter{
    constructor(){
        this.btnEnter = document.querySelector('.modal-login-btn-enter')
        this.obj = ['TEST IS GOOD!']

    }
    init(){
        this.btnEnter.addEventListener('click', ()=>{this.getKey()})
    }
    sendKey(){
        console.log(this.btnEnter);
        fetch(url + '/checkUser', {
            method: 'POST',
            body: JSON.stringify(this.obj)
        })
        .then(res => { return res.json()} )
        .then(response => {
            data.prodList = response
            console.log(data.prodList);
        })
    }
    getKey(){
        fetch(url + '/checkUser')
        .then(res => { return res.json()} )
        .then(response => {
            data.prodList = response
            console.log(data.prodList);
        })
    }
}