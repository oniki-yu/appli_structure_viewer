import { combineReducers } from 'redux';
const I = require('immutable');

import { BACK_HISTORY, RESERVE_PAGE_HISTORY, TOGGLE_CHANGE_FLAG, RESERVE_APPLI } from './action';


const appliInfo = {
    info: '',
    histories: [],
    changeFlag: false,
    currentNumber: 0,
    apiData: ''
};

const appliObject = {
    name: '',
    appId: ''
};

const appliObjects = I.Record(appliObject);

class Appli extends appliObjects {}

const ApiHistoryObject = {
    url: '',
    pageTitle: '',
};

const ApiHistoryObjects = I.Record(ApiHistoryObject);

class ApiHistory extends ApiHistoryObjects {}


const appli = (state = I.fromJS(appliInfo), action) => {
    switch (action.type) {
        case BACK_HISTORY:
            return state.set('apiData', action.data);
        case RESERVE_APPLI:
            const newAppli = new Appli ({
                name: action.name,
                appId: action.appId
            });
            return state.merge(I.fromJS({
                info: newAppli,
                histories: [],
                changeFlag: false,
                apiData: action.data
            }));
        case RESERVE_PAGE_HISTORY:
            const newApiHistory = new ApiHistory({
                url: action.url,
                pageTitle: action.pageTitle
            });
            const histories = !state.get('changeFlag') ? state.get('histories') : state.get('histories').take(state.get('currentNumber')+1);
            return state.merge(I.fromJS({
                histories: histories.push(newApiHistory),
                changeFlag: false,
                apiData: action.data
            }));
        case TOGGLE_CHANGE_FLAG:
            return state.merge(I.fromJS({
                changeFlag: true,
                currentNumber: action.num
            }));
        default:
            return state;
    }
};

const reducer = combineReducers({
    appli
});

export default reducer