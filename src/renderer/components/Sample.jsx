import React from 'react';
import { hashHistory } from "react-router";

export default class Sample extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick (event) {
        hashHistory.push('/example');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>example</button>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
            </div>
        );
    }
}
