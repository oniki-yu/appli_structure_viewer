import React from "react";
const { ipcRenderer } = require("electron");
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';

export class LinkData extends React.Component {
    render() {
        const { data, idx, appli, pageTitle } = this.props;
        const _href = data._href ? (data._href.match(/api\/tab/)
                    ? <ListItem
                        key={1}
                        primaryText={ "_href:  " + data._href }
                        onClick={() => (ipcRenderer.send("asynchronous-next-data", data._href, appId, pageTitle))}
                    />
                    : <ListItem
                        key={1}
                        primaryText={ "_href:  " + data._href }
                    />)
                : <ListItem
                    key={1}
                    primaryText="no _href"
                />;
        const _type = data._type ? data._type : "no _type";
        const appId = appli.toJSON().info.appId;
        return (
            <ListItem
                key={ idx + 1 }
                primaryText="Links"
                primaryTogglesNestedList={true}
                nestedItems={[
                    _href,
                    <ListItem
                        key={2}
                        primaryText={ "_type:  " + _type }
                    />
                ]}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const { appli } = state;
    return {
        appli: appli
    };
};

const ContainerLinkData = connect(
    mapStateToProps,
)(LinkData);

export default ContainerLinkData;
