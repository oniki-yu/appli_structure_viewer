import React from "react";
import { Link, hashHistory } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Provider } from 'react-redux';

import { addList } from '../action';

class PageId extends React.Component {
    render() {
        console.log(hashHistory);
        console.log(this.props.page);
        console.log("page");
        return (
            <div>
                <h2>pageId</h2>
                <Link to="/pages/3">リンク</Link>
                <div onClick={()=>hashHistory.goBack()}>Go BACK</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { page } = state;
    return {
        page: page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: e => dispatch(addList(e))
    };
};

const ContainerPageId = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageId);

export default ContainerPageId;
