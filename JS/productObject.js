"use strict"
const products = {
    list: [
        {
            id: '001',
            name: 'JProduct name',
            img: [
                '../img/image.png'
            ],
            category: '',
            brand: 'Adidas',
            cost: {
                old: '350',
                new: '299'
            },
            get discount() {
                let count = +this.cost.old - +this.cost.new,
                proc = +this.cost.old / 100,
                res = Math.floor(count / proc)
                return res 
            },
            rating: {
                votes: ['5', '5', '5'],
                get voters(){return this.votes.length} ,
                get rate() {  
                    let res = +this.votes[0]
                    for( let i = 1; i < this.votes.length; i++ ){
                        res += +this.votes[i]
                    }
                    res = Math.floor(res/this.votes.length)
                    return res
                } 
            },
            color: 'black',
            size: 'L'
        },
        {
            id: '002',
            name: 'HProduct name',
            img: [
                '../img/image.png'
            ],
            category: '',
            brand: 'Nike',
            cost: {
                old: '',
                new: '159'
            },
            get discount() {
                let count = +this.cost.old - +this.cost.new,
                proc = +this.cost.old / 100,
                res = Math.floor(count / proc)
                return res 
            },
            rating: {
                votes: ['5',  '2', '3', '4'],
                get voters(){return this.votes.length} ,
                get rate() {  
                    let res = +this.votes[0]
                    for( let i = 1; i < this.votes.length; i++ ){
                        res += +this.votes[i]
                    }
                    res = Math.floor(res/this.votes.length)
                    return res
                } 
            },
            color: 'grey',
            size: 'S'
        },
        {
            id: '003',
            name: 'BProduct name',
            img: [
                '../img/image.png'
            ],
            category: '',
            brand: 'Tissot',
            cost: {
                old: '155',
                new: '99'
            },
            get discount() {
                let count = +this.cost.old - +this.cost.new,
                proc = +this.cost.old / 100,
                res = Math.floor(count / proc)
                return res 
            },
            rating: {
                votes: ['5', '1'],
                get voters(){return this.votes.length} ,
                get rate() {  
                    let res = +this.votes[0]
                    for( let i = 1; i < this.votes.length; i++ ){
                        res += +this.votes[i]
                    }
                    res = Math.floor(res/this.votes.length)
                    return res
                } 
            },
            color: 'white',
            size: 'M'
        },
        {
            id: '004',
            name: 'AProduct name',
            img: [
                '../img/image.png'
            ],
            category: '',
            brand: 'Montblance',
            cost: {
                new: '199'
            },
            get discount() {
                let count = +this.cost.old - +this.cost.new,
                proc = +this.cost.old / 100,
                res = Math.floor(count / proc)
                return res 
            },
            rating: {
                votes: ['3'],
                get voters(){return this.votes.length} ,
                get rate() {  
                    let res = +this.votes[0]
                    for( let i = 1; i < this.votes.length; i++ ){
                        res += +this.votes[i]
                    }
                    res = Math.floor(res/this.votes.length)
                    return res
                } 
            },
            color: 'white',
            size: 'S'
        },
        {
            id: '005',
            name: 'AProduct name',
            img: [
                '../img/image.png'
            ],
            category: '',
            brand: 'Montblance',
            cost: {
                old: '399',
                new: '199'
            },
            get discount() {
                let count = +this.cost.old - +this.cost.new,
                proc = +this.cost.old / 100,
                res = Math.floor(count / proc)
                return res 
            },
            rating: {
                votes: ['5', '5', '5', '4'],
                get voters(){return this.votes.length} ,
                get rate() {  
                    let res = +this.votes[0]
                    for( let i = 1; i < this.votes.length; i++ ){
                        res += +this.votes[i]
                    }
                    res = Math.floor(res/this.votes.length)
                    return res
                } 
            },
            color: 'white',
            size: 'M'
        }
    ]
}