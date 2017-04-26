import React from 'react';
import { hashHistory } from "react-router";

export default class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Example
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
            </div>
        );
    }
}
