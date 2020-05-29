import React from 'react';
import MenuItem from './MenuItem'
import './MenuSection.css'

class MenuSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="accordion" id="accordionExample">
                    <div className="card border-0">
                        <div className="card-header bg-white" id="headingOne">
                            <h2 className="mb-0">
                                    <h2 className="sections">{this.props.menuType} </h2>                                
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <MenuItem menuType={this.props.menuType} count={this.props.count} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuSection;
