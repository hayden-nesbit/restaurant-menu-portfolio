import React from 'react'
import './MenuSection.css'
const axios = require('axios').default;

class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.getMenuItem = this.getMenuItem.bind(this)
        this.fetchMenuItems = this.fetchMenuItems.bind(this)
        this.setPrice = this.setPrice.bind(this)
        this.state = {
            menu: [],
        }
    }

    componentDidMount() {
        if (window.localStorage[this.props.menuType]) {
            let menu = JSON.parse(window.localStorage[this.props.menuType])
            this.setState({
                menu: menu
            })
        } else {
            this.fetchMenuItems(this.props.count)
        }
    }
    
    fetchMenuItems(numberOfItems) {
        for (let i = 0; i < numberOfItems; i++) {
            this.getMenuItem()
        }
    }

    componentDidUpdate() {
        window.localStorage.setItem(this.props.menuType, JSON.stringify(this.state.menu))
    }

    async getMenuItem() {
        let _this = this
        let axiosResult =
            await axios.get("https://entree-f18.herokuapp.com/v1/menu")
                .then(function (response) {
                    let arr = response.data.menu_items
                    let split = arr[0].description.split("with")
                    let menuItem = split[0]
                    let description = "with" + split[1]
                    let obj = { name: menuItem, price: _this.setPrice(), description: description }
                    return obj
                })

                .catch(function (error) {
                })

                .finally(function () {
                });

        await this.setState({
            menu: [...this.state.menu, axiosResult]
        })
    }

    setPrice() {
        return Math.floor(Math.random() * 15) + 10;
    }

    render() {
        return (
            <div className="card border-0">
                <div id="menuItems" className="card-body text-center mr-5">
                    <ul>
                        {this.state.menu.length > 0 ? this.state.menu.map((item, i) => {
                            return (
                                <div className="mb-3">
                                    <li id="list" className="list-unstyled" key={i}><b>{item.name} ~ {item.price}</b></li>
                                    <li id="list" className="list-unstyled text-small"><small><i>{item.description}</i></small></li>
                                </div>
                            )
                        }
                        ) : null}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuItem;
