import { combineReducers } from 'redux';
const I = require('immutable');

import { ADD_LIST, RESERVE_PAGE } from './action';

const page_data = {
    datas: [],
};

const page_url_name_object = {
    name: '',
    url: ''
};

const page_url_name = I.Record(page_url_name_object);

class PageUN extends page_url_name {}


const page_data_history = {
    datas: [],
};

const pageHistoryObject = {
    name: '',
    url: ''
};

const pageHistoryObjects = I.Record(pageHistoryObject);

class PageHistory extends pageHistoryObjects {}


function append_list (arr, child) {
    const newPage = new PageUN({
        name: child.title,
        url: child.link[0]._href
    });
    arr.push(newPage);
};

const page = (state = I.fromJS(page_data), action) => {
    switch (action.type) {
        case ADD_LIST:
            let arr = [];
            action.data.map(child => append_list(arr, child));
            return I.fromJS({
                datas: I.List(arr),
            });
        default:
            return state;
    }
};

 const pageHistory = (state = I.fromJS(page_data_history), action) => {
     switch (action.type) {
         case RESERVE_PAGE:
             const newPage = new PageHistory({
                 name: action.name,
                 url: action.url
             });
             return state.merge(I.fromJS({
                 datas: state.get('datas').push(newPage)
             }));
         default:
             return state;
     }
 };

const reducer = combineReducers({
    page, //1つ1つのreducerを書く。増えたらここに追加する。
    pageHistory
});

export default reducer