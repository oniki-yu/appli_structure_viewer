import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import { reservePageHistory, toggleChangeFlag } from '../action';
import History from './History';
import ApiDataItem from './ApiDataItem';

class Page extends React.Component {
    render() {
        const {page, pageHistory} = this.props;
        const apiDatas = page.toJSON().datas.map((page, key) => {
            return (
                <ApiDataItem page={page} id={key} key={key} reservePageHistory={this.props.reservePageHistory}/>
            )
        });
        const moveHistories = pageHistory.toJSON().datas.map((page, key) => {
            return (
                <History pageHistory={page} num={key} key={key} toggleChangeFlag={this.props.toggleChangeFlag} />
            )
        });
        return (
            <div>
                <div>{moveHistories}</div>
                <ul>{apiDatas}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { page, pageHistory } = state;
    return {
        page: page,
        pageHistory: pageHistory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reservePageHistory: (name, url) => dispatch(reservePageHistory(name, url)),
        toggleChangeFlag: (url, num) =>  dispatch(toggleChangeFlag(url, num))
    };
};

const ContainerPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);

export default ContainerPage;
