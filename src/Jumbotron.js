import React from 'react';

class Jumbotron extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div id="hero" className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4"></h1>
                    <p className="lead"></p>
                </div>
            </div>
        )
    }
}

export default Jumbotron