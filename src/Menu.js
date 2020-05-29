import React from 'react'
import MenuSection from './MenuSection'

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <MenuSection menuType={"Specials"} id={"special"} count={2}/>
                <MenuSection menuType={"Appetizers"} id={"apps"} count={15}/>
                <MenuSection menuType={"Entrees"} id={"entrees"} count={10}/>
                <MenuSection menuType={"Sides & Salads"} id={"sides"} count={8} />
                <MenuSection menuType={"Desserts"} id={"dessert"} count={3}/>
            </div>

        )
    }
}

export default Menu;
