import React from 'react'
const axios = require('axios').default;

class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.getMenuItem = this.getMenuItem.bind(this)
        this.state = {
            menu: [],
        }
    }

    componentDidMount() {
        this.getMenuItem(this.props.count)
    }

    componentDidUpdate() {
        //if items are equal to items sent, and ar
    }

    async getMenuItem(numberOfItems) {
        let axiosResult = await axios.get("https://entree-f18.herokuapp.com/v1/menu/" + numberOfItems)
            .then(function (response) {
                let arr = response.data.menu_items
                return arr 
            })
            
            .catch(function (error) {
                
            })
            
            .finally(function (arr) {
            });
            
       
        console.log(axiosResult)
        let itemArr = this.state.menu
        for (let i=0; i < axiosResult.length; i++) {
            let obj = {name: axiosResult[i], price: this.getPrice()}
            itemArr.push(obj)
        }

        this.setState({
            menu: itemArr
        })
        //local storage
    }

    getPrice(){
        return Math.floor(Math.random() * 15) + 10;
    }

    render() {
        let tmpItems = this.state.menu
        
        return (
            <div className="card border-0">
                <div className="card-body text-left">
                    <ul>
                        {tmpItems.map((item, i) => 
                            <li key={i}>{item.name.description} <b>{item.price}</b></li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuItem;