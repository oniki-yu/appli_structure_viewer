import React from "react";
const { ipcRenderer } = require("electron");
import {
    Step,
    Stepper,
    StepLabel,
    StepButton,
} from 'material-ui/Stepper';


export default class History extends React.Component {
    handleClick (url, appId, num) {
        ipcRenderer.send("requestHistory", url, appId);
        this.props.toggleChangeFlag(num);
    }
    render() {
        const {history, appId, num} = this.props;
        return (
            <Step>
                <StepButton onClick={() => this.handleClick(history.url, appId, num)}>{history.pageTitle}</StepButton>
            </Step>
        )
    }
}
