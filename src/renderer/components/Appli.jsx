import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';


import { toggleChangeFlag } from '../action';
import History from './History';
import Feed from './ApiData/Feed';

class Appli extends React.Component {
    render() {
        const { appli } = this.props;
        const appliName = appli.toJSON().info.name;
        const data = appli.toJSON().apiData ? <Feed data={ appli.toJSON().apiData } /> : 'no data';
        const apiHistories = appli.toJSON().histories.map((history, key) => {
            return (
                <History history={history} appId={ appli.toJSON().info.appId } num={key} key={key} toggleChangeFlag={this.props.toggleChangeFlag} />
            )
        });
        return (
            <div className="pane-group">
                <div className="pane-sm sidebar">
                    <form id="comment-form">
                        <input type="text" id="comment-input" placeholder="コメント" />
                        <input type="submit" value="投稿" />
                    </form>
                </div>
                <h1>{appliName}</h1>
                <Stepper>{apiHistories}</Stepper>
                { data }
                {/*<div className="pane">*/}
                    {/*<Stepper>{moveHistories}</Stepper>*/}
                    {/*{feed}*/}
                    {/*/!*{apiDatas}*!/*/}
                    {/*/!*<ul>{apiDatas}</ul>*!/*/}
                {/*</div>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { appli } = state;
    return {
        appli: appli
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
    };
};

const ContainerAppli = connect(
    mapStateToProps,
    mapDispatchToProps
)(Appli);

export default ContainerAppli;
