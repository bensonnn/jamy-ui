import React, { Proptypes }    from "react";

export default class App extends React.Component {

    render() {
      return (
        <div className='container'>
            <div className="row">
                <p>Header</p>
                { this.props.children }
                <p>footer</p>
            </div>
        </div>
      )
    }
};
