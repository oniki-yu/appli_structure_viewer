import { combineReducers } from 'redux';
const I = require('immutable');

import { ADD_LIST, RESERVE_PAGE_HISTORY, TOGGLE_CHANGE_FLAG, RESERVE_APPLI, ADD_JSON } from './action';


const appliInfo = {
    info: '',
    histories: [],
    changeFlag: false,
    currentNumber: 0,
    apiData: ''
};






const page_data = {
    datas: {},
};

const page_url_name_object = {
    name: '',
    url: '',
};

const page_url_name = I.Record(page_url_name_object);

class PageUN extends page_url_name {}


const page_data_history = {
    appli: '',
    datas: [],
    changeFlag: false,
    currentNumber: 0
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


function append_list (arr, child) {
    const newPage = new PageUN({
        name: child.title,
        url: child.link[0]._href
    });
    arr.push(newPage);
};



const appli = (state = I.fromJS(appliInfo), action) => {
    switch (action.type) {
        case ADD_LIST:
            let arr = [];
            action.data.map(child => append_list(arr, child));
            return I.fromJS({
                datas: I.List(arr),
            });


        case RESERVE_APPLI:
            const newAppli = new Appli ({
                name: action.name,
                appId: action.appId
            });
            return state.merge(I.fromJS({
                info: newAppli,
                datas: [],
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
                datas: state.get('datas'),
                changeFlag: true,
                currentNumber: action.num
            }));

        default:
            return state;
    }
};


// const page = (state = I.fromJS(page_data), action) => {
//     switch (action.type) {
//         case ADD_LIST:
//             let arr = [];
//             action.data.map(child => append_list(arr, child));
//             return I.fromJS({
//                 datas: I.List(arr),
//             });
//         case ADD_JSON:
//             return I.fromJS({
//                 datas: action.json,
//             });
//         default:
//             return state;
//     }
// };
//
// const pageHistory = (state = I.fromJS(page_data_history), action) => {
//     switch (action.type) {
//         case RESERVE_APPLI:
//             const newAppli = new Appli ({
//                 name: action.name,
//                 appId: action.appId
//             });
//             return state.merge(I.fromJS({
//                 appli: newAppli,
//                 datas: [],
//                 changeFlag: false
//             }));
//         case RESERVE_PAGE_HISTORY:
//             const newPage = new PageHistory({
//                 name: action.name,
//                 url: action.url
//             });
//             const datas = !state.get('changeFlag') ? state.get('datas') : state.get('datas').take(state.get('currentNumber')+1);
//             return state.merge(I.fromJS({
//                 datas: datas.push(newPage),
//                 changeFlag: false
//             }));
//         case TOGGLE_CHANGE_FLAG:
//             return state.merge(I.fromJS({
//                 datas: state.get('datas'),
//                 changeFlag: true,
//                 currentNumber: action.num
//             }));
//         default:
//             return state;
//     }
// };

const reducer = combineReducers({
    appli
    // page, //1つ1つのreducerを書く。増えたらここに追加する。
    // pageHistory
});

export default reducer