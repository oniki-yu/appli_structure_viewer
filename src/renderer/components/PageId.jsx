import React from "react";
import { Link, hashHistory } from "react-router";


export default class PageId extends React.Component {
    render() {
        console.log(hashHistory);
        return (
            <div>
                <h2>PageId</h2>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
                });
            </div>
        )
    }
}