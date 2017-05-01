import React from "react";
const { ipcRenderer } = require("electron");
import {
    Step,
    Stepper,
    StepLabel,
    StepButton,
} from 'material-ui/Stepper';


export default class History extends React.Component {
    handleClick (url, num) {
        this.props.toggleChangeFlag(num);
        ipcRenderer.send("asynchronous-next-data", url);
    }
    render() {
        const {pageHistory, num} = this.props;
        return (
            <Step>
                <StepButton onClick={() => this.handleClick(pageHistory.url, num)}>{pageHistory.name}</StepButton>
            </Step>
        )
    }
}
