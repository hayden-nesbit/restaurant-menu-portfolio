import React from 'react';

class StartersMenu extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <div className="container">
                <p>
                    <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        Starters
                    </button>
                </p>
                <div className="collapse" id="collapse1">
                    <div className="card card-body">
                        <p>text here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartersMenu;
